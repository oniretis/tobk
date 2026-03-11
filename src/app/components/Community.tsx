"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Users, Mic } from "lucide-react";

export default function CommunityPartners() {
  const [expandedPartners, setExpandedPartners] = useState(false);
  const [expandedSpeakers, setExpandedSpeakers] = useState(false);

  const partners = [
    "Northwest CDC",
    "Haramabee Great Neighborhood Initiative (HGNI)",
    "Riverworks Community Development Corperation",
    "District 5 - Milwaukee Police Department",
    "Pastors United",
    "WestCare Foundation - Milwaukee",
    "The Artery",
    "Grace Fellowship Church",
    "Westside M.B. Church",
    "Safe and Sound",
    "Westside MBC",
    "Vision for the World Ministries",
    "Greater Bethlehem Temple New World Ministries",
    "BeinTween",
    "UWM CBLRR",
    "MSOE honors program",
    "Milwaukee Behavioral Health Department",
    "Outreach Health Centers",
    "5 Points Art Gallery and Studios",
    "Bay Bridge Wisconsin",
    "House of Kings and Priests",
    "Sister Circle with Heddy Keith",
    "Groundworks Milwaukee",
    "Hallowed Missionary Baptist",
    "Center for Leadership of Afrikan Women's Wellness (CLAWW)",
  ];

  const speakers = [
    "Mayor Tom Barrett",
    "City Treasurer - Spencer Coggs",
    "State Representative 10th District - Sandy Pasch",
    "State Representative - Evan Goyke",
    "State Senator - Lena Taylor",
    "County Sherriff's Office",
    "Congresswoman Gwen Moore Office",
    "District 5 Milwaukee Police Department",
    "County Supervior- Willie Johnson",
    "County Supervior - David Bowen",
    "Alderwoman - M  Cogg",
    "Alderman - Donvan",
    "Black Health Coalition",
    "Universal Company",
    "Hope Elementary",
    "Common Ground",
    "SEWRPC",
    "Milwaukee Police Department",
    "PKSD legal Clinic",
    "Thrivent Financial",
    "HR Block",
    "Department of Transportation",
    "Dr. Zelda Okia of Zoki Ventures-Life Coach",
    "Dr. Vanessa White of Purely Professional-Organizational Development and Leadership Coaching",
    "a host of others",
  ];

  const renderList = (items: string[], expanded: boolean) => {
    const displayItems = expanded ? items : items.slice(0, 9);
    return (
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {displayItems.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="space-y-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-b from-background to-secondary/20">
      <Tabs defaultValue="partners" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="partners" className="text-lg">
            <Users className="mr-2 h-5 w-5" />
            Community Partners
          </TabsTrigger>
          <TabsTrigger value="speakers" className="text-lg">
            <Mic className="mr-2 h-5 w-5" />
            Monthly Speakers
          </TabsTrigger>
        </TabsList>
        <TabsContent value="partners">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Community Partners
              </CardTitle>
              <CardDescription className="text-lg">
                tobk is always looking for community partners and groups with
                whom to collaborate. This includes businesses, industry,
                organizations, non-profits, agencies, government and other
                neighborhood clubs and associations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">
                A partial listing of our Partners include:
              </h3>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                {renderList(partners, expandedPartners)}
              </ScrollArea>
              <Button
                variant="outline"
                onClick={() => setExpandedPartners(!expandedPartners)}
                className="mt-4 w-full"
              >
                {expandedPartners ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" /> Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" /> Show More
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="speakers">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Monthly Speakers/Presenters
              </CardTitle>
              <CardDescription className="text-lg">
                Each month tobk invites a number of people, including public
                officials, business leaders, community organizers, agencies and
                organizations to provide value information for community
                residents.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold mb-4">
                A partial listing of monthly Speakers/Presenters have included:
              </h3>
              <ScrollArea className="h-[400px] rounded-md border p-4">
                {renderList(speakers, expandedSpeakers)}
              </ScrollArea>
              <Button
                variant="outline"
                onClick={() => setExpandedSpeakers(!expandedSpeakers)}
                className="mt-4 w-full"
              >
                {expandedSpeakers ? (
                  <>
                    <ChevronUp className="mr-2 h-4 w-4" /> Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="mr-2 h-4 w-4" /> Show More
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
