import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, DollarSign, Home, Info, Mail } from "lucide-react";

export default function DonatePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Support Five-Points Neighborhood Association
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-center text-xl">
              Together, we can make a difference in the heart of our community!
            </p>
            <p>
              The Five-Points Neighborhood Association relies on the generosity
              of individuals like you to empower, educate, and enhance the
              quality of life for all residents.
            </p>
            <p>
              Your contribution enables us to organize events, implement
              initiatives, and advocate for positive change in our neighborhood.
              Every donation, no matter the size, plays a crucial role in
              building a stronger, more vibrant community for everyone.
            </p>
            <p>
              Join us in shaping the future of Five-Points. Your support
              matters. Donate today and be a part of the positive impact
              we&apos;re creating together!
            </p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <h3 className="font-semibold mb-2 flex items-center text-lg">
                <DollarSign className="w-5 h-5 mr-2" />
                How to Donate
              </h3>
              <p>
                You can donate to our Zelle account using the following
                information:
              </p>
              <p className="font-mono mt-2 text-lg">Account: 4143648677</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full text-lg py-6" size="lg">
              <Heart className="w-6 h-6 mr-2" />
              Support Our Community
            </Button>
          </CardFooter>
        </Card>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">
                Five-Points Neighborhood Association
              </h2>
              <p>Empowering our community, one initiative at a time.</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href="/about"
                className="flex items-center hover:text-primary"
              >
                <Info className="w-5 h-5 mr-1" />
                About Us
              </Link>
              <Link
                href="/contact"
                className="flex items-center hover:text-primary"
              >
                <Mail className="w-5 h-5 mr-1" />
                Contact
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Five-Points Neighborhood Association.
            All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
