import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

type Event = {
  date: string;
  title: string;
};

// Updated events data structure with all years from 2024 to 2011
const events: Record<string, Event[]> = {
  "2024": [
    { date: "Jan-Dec", title: "UWM Service learners and Interns" },
    { date: "Jan-Dec", title: "CRT/CAT meetings with GMF and Partners" },
    {
      date: "Jan-Dec",
      title:
        "Continuing Art on a Jar 2000K for preparation and distribution remaining",
    },
    {
      date: "Jan-Dec",
      title: "Quarterly meetings Nationwide Middle Neighborhoods",
    },
    { date: "Jan-Dec", title: "Climate XChange at call of Climate X" },
    { date: "Jan-Dec", title: "Volunteermatch.org" },
    { date: "Jan-Dec", title: "Catchafire sponsor GMF" },
    { date: "Jan-Dec", title: "Sister Talk sponsors CLAWW and CCHD" },
    {
      date: "Jan-Dec",
      title:
        "Forbes Riley Marketing training sponsored by CCHD, Lisa Penny Ink",
    },
    {
      date: "Jan-Dec",
      title:
        "Various events sponsored by the Wisconsin Alzheimer's Institute connection Stephanie Houston",
    },
    {
      date: "Jan 15",
      title: "Clean and Spruce MLK JR. Day of Service sponsored by Thrivent",
    },
    { date: "Feb", title: "Solution Focused Theory by Elliot Connie" },
    { date: "Feb", title: "MDF Intro to grant Program" },
    { date: "Feb-May", title: "Groundworks MKE" },
    {
      date: "March 2024",
      title:
        "Six Week course with Dr. Zelda on Ditch Emotional Eating open to public sponsored by CCHD",
    },
    { date: "April 2", title: "Get out the Vote campaign" },
    {
      date: "April 13",
      title:
        "Health Fair and Old Eye Glasses, Blood Drive, Old prescriptions take back, and clothing exchange (Versita, Lion's Club, tobk, MPD, GFC, UWM)",
    },
    {
      date: "April 27",
      title:
        "Saving Black Lands Near Freshwater -first in a continuing series: Dr. Nicole Robinson",
    },
    { date: "May 4", title: "Blood Drive with Versita" },
    {
      date: "May 4",
      title:
        "Sheedits Student Apathy and increasing college enrollment sponsored by CCHD",
    },
    { date: "May 27", title: "SDC update and Community Resource information" },
    {
      date: "May 10",
      title: "Mother's Day Bingo sponsored by CCHD and Clinton Rose, Westcare",
    },
    { date: "May 24-25", title: "Climate Action by Climate Xchange" },
    {
      date: "May",
      title: "Vacant to Vibrant sponsored by Center for Community Progress",
    },
    {
      date: "Jan-June",
      title:
        "Healthy Living with Diabetes sponsored by GFC, Wisconsin Healthy Aging, UW Madison School of pharmacy",
    },
    {
      date: "June 2024-June 2025",
      title:
        "Enhancing Youth and Community Well-Being: CHIP, AHEC, tobk, GMF, GFC",
    },
    { date: "Juneteenth", title: "Marketing-CCHD" },
    { date: "June", title: "Board Retreat and outing- sponsor CCHD" },
    {
      date: "June-July",
      title: "Declutter as a Catalyst for Change sponsors CCHD, Zoki Ventures",
    },
    {
      date: "July",
      title: "Trauma Informed Leadership sponsored by Elliot Connie",
    },
    {
      date: "June-Dec",
      title:
        "Various City Meetings regarding services, developments, other issues affecting quality of life",
    },
    { date: "June-Dec", title: "Neighborhood Works America" },
    {
      date: "Jan-Dec",
      title:
        "Turner Hall presentations and participation: tobk and partner Bay Bridge",
    },
  ],
  "2023": [
    {
      date: "Jan 14",
      title: "Sister Talk in collaboration with CLAWW- Broken Butterflies",
    },
    { date: "Jan 16", title: "Dr. Martin Luther King Jr. Day of Service" },
    { date: "Jan-Dec", title: "Training with Dr. Forbes Riley" },
    { date: "Jan 18", title: "Middle Neighborhoods" },
    { date: "Monthly", title: "Climate Xchange" },
    { date: "Jan-Dec", title: "Dr Zelda-series on story telling" },
    {
      date: "Jan-Dec",
      title: "Dr. White- board accountability and organization succession plan",
    },
    { date: "Jan-Dec", title: "Dr Calhoun–upcoming leadership series rebirth" },
    { date: "Jan-Dec", title: "Leadership-training on five major committees" },
    {
      date: "Jan-Dec",
      title:
        "Organizational Development-identifying and training new leaders with a mentor: secure 20-40 year olds",
    },
    { date: "Winter", title: "Girl Talk (virtual date planned for winter)" },
    { date: "March", title: "Entrepreneur showcase planned for March" },
    {
      date: "Jan-Dec",
      title:
        "Senior reassessment and program implementation as well as connection to home help services",
    },
    { date: "Jan-Dec", title: "Financial LIteracy in tough times" },
    { date: "Jan-Dec", title: "Scholarship seminars and breakout sessions" },
    {
      date: "Jan-Dec",
      title: "Legal letters for transportation, I43, and Rescue funds",
    },
    { date: "Jan-Dec", title: "Continue Catchafire training sessions" },
    { date: "Jan-Dec", title: "Continuing Celebration of Wisdom Series" },
    {
      date: "Jan-Dec",
      title: "Art on a Jar until 3000K have been distributed",
    },
    { date: "Jan-Dec", title: "UWM service learners and Interns" },
    { date: "Jan-Dec", title: "MSOE Honors program" },
  ],
  "2022": [
    {
      date: "10/16/22",
      title: "Catchafire sponsored by GMF Session - Capacity Building",
    },
    { date: "2022", title: "Talent Recruitment" },
    { date: "2022", title: "Marketing strategies-social media" },
    { date: "2022", title: "Marketing strategies-in person" },
    { date: "2022", title: "Marketing strategies-website eval" },
    { date: "2022", title: "Fundraising-various types and creating a plan" },
    { date: "Quarterly", title: "Justice for homeowners- quarterly meetings" },
    {
      date: "2022",
      title:
        "Mental Health Mondays- tobk and HOKP with 60 students topics: setting first month, Oct to current Bully Identification, Prevention, and Deflation of Bully Power",
    },
    { date: "December 10 2022", title: "Music Therapy sponsored by CCHD" },
    {
      date: "Jan 2022 to current",
      title:
        "Civil Response Team/Civil Action Team- connecting resources and discussing resource distribution",
    },
    {
      date: "Dec. 24-25, 2022",
      title: "Holiday Greeting video recording media sponsored by CCHD",
    },
    {
      date: "Oct 8, 2022",
      title:
        "Playground design participation and culminating in the redesigned Green Bay Avenue Playground opening",
    },
    {
      date: "April 4, 2022 to current",
      title: "Justice for Homeowners National",
    },
    { date: "Jan 2022 to current", title: "Middle Neighborhood National" },
    {
      date: "10/30/22",
      title:
        "Content Coach creating a personal Brand by Content Coach for four weeks",
    },
    {
      date: "April 2022- current",
      title:
        "Forbes Riley Training on Mastermind Coaching/learning how to build groups",
    },
    {
      date: "July 2022 to current",
      title: "Elliot Connie- Solution Focused Therapy",
    },
    {
      date: "12/4/2022",
      title: "Grant Cardone and Pete Vargas-Building a Stage and using OPP",
    },
    { date: "12/5/2022", title: "Blaze 5 day summit for women" },
    { date: "11/19/2022", title: "Overcoming Objectives" },
    {
      date: "Nov 2022 to current",
      title:
        "Ordering at home Covid Test Kits for seniors and those without internet access",
    },
    { date: "10/3/22", title: "Rountable 5 strategic sesssions" },
    { date: "Nov 2022 and Jan 2022", title: "Redress Movement" },
    { date: "2022", title: "tobk Business Development mts" },
    { date: "2022 to current", title: "Sister district participation" },
    { date: "2022", title: "Joan Garry turning board into fundraisers" },
    {
      date: "2022 to current",
      title: "Live Richer Academy budgeting with Tiffany the Budgetnista",
    },
    {
      date: "9/21/22",
      title: "Letter to MMOC re: protocols and payment for Black artists",
    },
    {
      date: "Dec 2022",
      title: "African American Round Table-How to represent yourself",
    },
    {
      date: "2022",
      title: "Seminar on Storytelling as a means to gain momentum by Les Brown",
    },
    { date: "2022", title: "Using Springboard stories by Forbes Riley" },
    { date: "Nov 2022", title: "Virtual Memorial" },
    {
      date: "2022",
      title:
        "Multiple quality of life surveys on social media platforms throughout the year",
    },
    {
      date: "Summer 2022",
      title: "Healing Drum Circles in collaboration with CLAWW",
    },
    {
      date: "Summer 2022",
      title:
        "Art on a Jar collection and decoration- continuous since summer 2022 (goal distribution of 3000K)",
    },
    {
      date: "2022",
      title: "Reading How to gentrify a city by Peter Moskowitz",
    },
    {
      date: "June - August",
      title:
        "Interns Summer community engagement, social media, and skill development",
    },
    {
      date: "2022",
      title: "Delivery of Preprinted paint canvasses for mental health",
    },
    { date: "2022", title: "Virtual Art therapy in collaboration with HOKP" },
    { date: "2022", title: "Wise Symposium on Mental health" },
    { date: "Dec", title: "Pre-Kwanzaa celebration with CLAWW" },
    { date: "2022", title: "Bike Ride in Collaboration with Dawn to Dusk" },
    { date: "2022", title: "Tenant Landlord replay posted on facebook page" },
    {
      date: "Dec 10",
      title:
        'Nancy Yarborough "The Exocuds" session for Women in collaboration with CLAWW 5 Points sponsored by CCHD',
    },
    {
      date: "December 16",
      title:
        "Listening Session with the Police of District 5 held at Grace Fellowship",
    },
    { date: "2022", title: "Registered 3 students in college" },
    {
      date: "2022",
      title: "Mapping racism, mapping transportation, recruiting",
    },
    {
      date: "Oct 19-Oct 22",
      title: "Participation in county supervisor county budget",
    },
    {
      date: "Oct 19, 2022",
      title:
        "Advertisement of Milwaukee county meeting for job fair (attended)",
    },
    { date: "2022", title: "Advertise WE energy kits for savings" },
    { date: "2022", title: "Sister Talk on Thursdays" },
    { date: "Oct 8, 2022", title: "Wisconsin Felon Pardon discussions" },
    { date: "2022", title: "Hearing on energy rates current and ongoing" },
    { date: "2022", title: "HBCU historic tour and attendance" },
    {
      date: "Sept",
      title:
        "Several youth representatives to virtual attendance at college tour",
    },
    {
      date: "Aug to Dec 2022",
      title: "Virtual attendance and participation with Milwaukee Turners",
    },
    {
      date: "Nov 16, 2022",
      title: "Reentry conversations with Dr Sequana taylor",
    },
    { date: "Dec 6-8, 2022", title: "DPW tracing project hiring events MC" },
    {
      date: "Dec 1, 2022",
      title: "Community conversations voting rights while incarcerated",
    },
    {
      date: "Thanksgiving",
      title:
        "For thanksgiving some individual helped pack thanks giving baskets",
    },
    { date: "2022", title: "4 member attended Messwood Screening" },
    {
      date: "2022",
      title:
        "Studying and implementing strategies with AARP for aging in place…attend virtual webinars",
    },
    {
      date: "2022",
      title:
        "Autumn Social in Collaboration with Dawn to Dusk sponsored by CCHD",
    },
    {
      date: "Nov 7",
      title:
        "Participation with Souls to the Polls with Moses Fuller and Greg Lewis",
    },
    { date: "Sept 29, 2022", title: "City informational Session" },
    { date: "Sept 29, 2022", title: "Information on Working" },
    { date: "Oct 2", title: "Basketball" },
    {
      date: "2022",
      title:
        "Eldertree program health study 1 year of service and participants have monitoring of health conditions, a computer and a free year of service",
    },
    { date: "2022", title: "Part 1 Secrets of the Negro Leagues" },
    {
      date: "July 2022 to current",
      title:
        "Leadership and organizational development meeting. Team accountability one-one",
    },
    {
      date: "2022",
      title:
        "Constant communication and request for protections for I43 project, screening costs and legal representation commitment",
    },
    {
      date: "Fridays",
      title:
        'Participation through comments and guidance on the "Man Show" on Fridays on WNOV',
    },
    {
      date: "2022",
      title:
        "Consistent identifying of students to introduce and work through enrollment in college or a tech school and secure the funding available",
    },
    { date: "October 2022", title: "Family Fall fest at Grace" },
    {
      date: "July 2022 to current",
      title:
        "Garden Park design and woodwork classes, landscaping classes, and organization of space",
    },
    {
      date: "Jan to current",
      title:
        "Working with Exploreustv providing experiences for students pursuing journalism, FTP careers opportunities to edit, write, and create filming projects with credits",
    },
  ],
  "2021": [
    {
      date: "1/7/21",
      title:
        "American Heart Association with Donald Drive, Sidney Moncrief and Lammie",
    },
    {
      date: "1/11/21",
      title:
        "5 steps to a thriving and resilient nonprofit in uncertain times by Joan Garry",
    },
    {
      date: "1/12/21",
      title: "Zoning board anti displacement screen printing",
    },
    { date: "1/21/21", title: "HR fair for community virtual" },
    { date: "Jan 2021", title: "Entrepreneur Fair with Ald. Coggs" },
    { date: "Jan 2021", title: "Community Collaborative meetings" },
    {
      date: "2021",
      title:
        "Leadership training and organizational development workshops from current (sponsors CCHD)",
    },
    {
      date: "Fridays",
      title:
        "Food distribution on Fridays starting at 7 am at Grace (Sponsors Grace Fellowship and Bay Bridge)",
    },
    { date: "2nd and 4th Saturdays", title: "Sister Circle- recurrent" },
    { date: "12-2", title: "Mental Health Monday with HOKP- recurrent" },
    { date: "2021", title: "Pathway to Joyful Habit Change (tobk and CCHD)" },
    {
      date: "Aug 12 at 11am",
      title: 'Upcoming Book Read "Evicted"-Intro (other dates coming)',
    },
    { date: "2021", title: "Upcoming I43 meeting with membership and others" },
    {
      date: "August 2021",
      title:
        "Upcoming membership workshop on art (5Pts arts gallery, CCHD,tobk)",
    },
    { date: "Sept 2021", title: "UWM service learners starting" },
  ],
  "2020": [
    {
      date: "1/3/20",
      title: "Grant writing started (continued and meeting tomorrow mandatory)",
    },
    {
      date: "June 2020",
      title: "Participation on Reckless and Carjacking Task Force: report",
    },
    { date: "6/26/20", title: "Time to exhale held at grace" },
    {
      date: "6/30/20",
      title: "Meeting with group: moving forward team goals leaders",
    },
    {
      date: "7/3/20",
      title: "Class on structure of the constitution on Coursera",
    },
    { date: "July", title: "PPE at Grace" },
    {
      date: "7/13/20",
      title: "Thrive summit (purchased replay for those to watch)",
    },
    { date: "7/15/20", title: "GMF nonprofits 1pm" },
    {
      date: "July/August",
      title: "Hildebrand law- certificates given re: estate planning",
    },
    { date: "7/16/20", title: "Fit day work network for good 10am" },
    { date: "7/16/20", title: "Social mediation 2pm" },
    { date: "7/19/20", title: "Yellow brick fashion" },
    { date: "7/21/20", title: "Bay Bridge" },
    { date: "7/21/20", title: "Friday climate talk" },
    { date: "7/21/20", title: "GMF nonprofits 11-12" },
    {
      date: "7/23-28/20",
      title: "Freedom summit (purchased replays for us to watch)",
    },
    { date: "7/28/20", title: "Digital presence" },
    {
      date: "7/30/20",
      title: "ACLU legal observer training taught by Susan Padveen",
    },
    { date: "August", title: "PPE at Grace" },
    {
      date: "August",
      title: "Meeting at 5 pts gallery re: gentrification and signature",
    },
    { date: "8/4/20", title: "Discussion with group on one on one" },
    { date: "8/4/20", title: "Micah 5 week trainings on one one" },
    { date: "8/28/20", title: "Digital nonprofit building" },
    { date: "8/30/20", title: "Town Hall on Human Trafficking" },
    { date: "9/22/20", title: "Resident meeting with Hamid Abd Al Jamin" },
    {
      date: "9/24/20",
      title: "Plan with Bid Halyard park attended zoom meeting",
    },
    { date: "October", title: "On the table presentation" },
    {
      date: "October",
      title: "Prostate at GBTNWM (sponsors: CCHD, GMF, Julia Means, BHCW)",
    },
    { date: "10/1/20", title: "Skills on interviewing led by Kim" },
    { date: "Oct 8-13", title: "Various presentations (choose your own)" },
    { date: "10/13/20", title: "Finding the frontlines" },
    { date: "10/13/20", title: "Leading across generations" },
    { date: "10/13/20", title: "Focus on black/brown philanthropy" },
    { date: "10/13/20", title: "Mapping middle class neighborhoods 1pm" },
    { date: "10/13/20", title: "Playbook leading change 4pm by Sanyin Sang" },
    {
      date: "10/13/20",
      title: "Growth and customer engagement by Mark Thompson",
    },
    {
      date: "10/14/20",
      title: "Superpower symphony part I future of inclusion Oshoke Abalm",
    },
    { date: "10/14/20", title: "Empowering women Sharon Melnick 4pm" },
    { date: "10/15/20", title: "Harnessing resilience in leadership 12pm" },
    { date: "10/15/20", title: "Resilience is wonderful Srikamar Rao" },
    { date: "10/18/20", title: "Town Hall on know your voting rights" },
    { date: "10/23/20", title: "Eric Dozier" },
    { date: "10/29/20", title: "Helping Veterans become Entrepreneurs" },
    {
      date: "November",
      title: "Micah training on leadership and use of break out room",
    },
    { date: "11/9/20", title: "Harambee Org Meeting" },
    { date: "11/12/20", title: "Group Meeting" },
    {
      date: "11/12/20",
      title: "Mental health and substance abuse in collaboration with HOKP",
    },
    { date: "11/20/20", title: "Meeting with Westcare" },
    { date: "11/21/20", title: "HR fair for community virtual" },
    { date: "12/2/20", title: "DOT meeting 9am" },
    { date: "12/2/20", title: "CEDC 1:30pm" },
    { date: "12/2/20", title: "A Milwaukee for all" },
    { date: "12/2/20", title: "Student talk with wfb" },
    { date: "12/3/20", title: "Training with Dr. White leader to leader" },
    { date: "12/4/20", title: "Dzoier and Friday black talks with POTE" },
    { date: "12/4/20", title: "Meeting with CCHD" },
    { date: "12/7/20", title: "CPC 1:30pm" },
    { date: "12/8/20", title: "PHS" },
    { date: "12/9/20", title: "CEDC" },
    { date: "12/9/20", title: "Soc grant tracy j brown" },
    { date: "12/12/20", title: "tobk" },
    { date: "12/12/20", title: "Claww sister talk" },
    { date: "12/27/20", title: "Dr White and sy leader to leader strategies" },
    { date: "12/30/20", title: "Tribe live" },
    { date: "12/30/20", title: "Kwanzaa first fruits with CLAWW" },
    { date: "2020", title: "Anti Displacement protest march" },
    {
      date: "2020",
      title:
        "Antidisplacement gathering signatures for 5 points 10 points plan",
    },
    { date: "2020", title: "Lead 2 change" },
    { date: "2020", title: "Covid workshop and class on 'Contact tracing'" },
    { date: "2020", title: "'Learning to learn' class on Coursera" },
    { date: "2020", title: "Virtual painting classes sponsored by HOKP" },
    { date: "2020", title: "Bay bridge committee" },
    {
      date: "2020",
      title: "Community Art Talk, reboot and set goals at 5 pts arts gallery",
    },
    { date: "Fall 2020", title: "Community Collaborative meetings" },
    { date: "Jan 2020", title: "Planning and reassessments" },
    {
      date: "Feb 2020",
      title: "Leadership training (continue book of the month club)",
    },
  ],
  "2019": [
    {
      date: "October 2018-May 2019",
      title:
        "MSOE honor Scholars Program-Gardening Design and lot transformation",
    },
    {
      date: "Jan-Dec 2019",
      title: "Center for Community Progress Monthly webinars",
    },
    {
      date: "March 9, 2019",
      title:
        "Leadership strategic planning training sponsored by CCHD by Calhoun Consultants",
    },
    {
      date: "March 23, 2019",
      title:
        "Arts as a Means of Self-Expression Event - dances and discussion with lunch. Doors open 11am sponsored in part by grants from ON the Table MKE-GMF and CCHD. In kind donations",
    },
    {
      date: "March 30th, 2019",
      title:
        "Leadership training on stages of grief and providing support in Waukesha, sponsored by CCHD with Stephen Lay Ministries",
    },
    { date: "Spring 2019", title: "Brewers Buddies Attendance" },
    {
      date: "April",
      title: "Learning excursions and classes sponsored by CCHD",
    },
    {
      date: "2019",
      title: "Food support oureach to tobk through Grace Fellowship",
    },
    {
      date: "2019",
      title: "YNLBP- tobk youth participation sponsored by CCHD",
    },
    {
      date: "June 9, 2019",
      title: "Open our Hearts Wide at St. Martin De Porres",
    },
    {
      date: "2019",
      title:
        "Chat with Bader- represntatives to three of last trimester meetings",
    },
    {
      date: "June 2019",
      title: "Neighborhood Improvement Thrivent and CHWC, in kind",
    },
    { date: "June 1, 2019", title: "Garden prep, resource and health fair" },
    { date: "June 2019 to current", title: "Network for Good webinars" },
    { date: "Jan 2019 to current", title: "Tracy J Brown webinars" },
    {
      date: "July 20, 2019",
      title: "Harambee Clean Up-community, residents, Bader, Westcare",
    },
    {
      date: "July 27, 2019",
      title:
        "Musical Learning exploration with artist V. Michael Mckay tobk participation sponsored by CCHD",
    },
    {
      date: "Aug 10, 2019",
      title:
        "Back to school, peace promotion, health and art resource, lifelong learning lead organizer Hallowed Baptist, tobk, sponsors: CCHD, residents, and participating organizations",
    },
    {
      date: "Aug 24, 2019",
      title:
        "ACLU Know your rights (sponsors ACLU, supplies OTT, materials and venue CCHD)",
    },
    {
      date: "2019",
      title: "Art at Lynden Sculpture Gardens with Evelyn Patricia Terry",
    },
    {
      date: "Sept- Dec 2019",
      title: "Leadership planning and grant writing training and submissions",
    },
    { date: "Sept 2019-May 2020", title: "UWM service learners" },
    {
      date: "Oct. 2019",
      title:
        "Bully Prevention workshop and followup with Obama HS- sponsored by CCHD",
    },
    {
      date: "Oct 10, 2019",
      title: "JCC On the Table Intended and Unintended outcomes of inclusion",
    },
    {
      date: "Oct 12, 2019",
      title:
        "Pieces Play (learning excursion youth and adults) sponsors: Focus on Families and tobk participation CCHD",
    },
    {
      date: "Oct 22, 2019",
      title:
        "Transportation with DoT and Housing with HUD- materials, venue, supplies sponsored by CCHD",
    },
    {
      date: "Nov 22 &23, 2019",
      title:
        "Women's Empowerment Workshop-Talitha Cumi (varied topics)- tobk participation individuals and CCHD : VFTW ministries",
    },
    { date: "2019-2020", title: "Bucks Charity ticket program" },
    {
      date: "Dec 4, 2019",
      title:
        "Bay Bridges- first in a series of address racism in nearby area-new collaborative partner",
    },
    {
      date: "Dec 11, 2019",
      title: "ANP (Alert Neighborhood Program) awardees",
    },
    {
      date: "Dec 23, 2019",
      title:
        "Harambee Holiday Luncheon sponsored by Westcare, Bader, Clinton Rose: community event",
    },
  ],
  "2018": [
    {
      date: "Jan. 27th, 2018",
      title:
        "Financial seminar and event planning sponsored by HR Block and CCHD 10am@Grace Fellowship",
    },
    {
      date: "Feb 16-17, 2018",
      title:
        "24 hour locked in for learning with Westside, tobk participants sponsored by CCHD",
    },
    {
      date: "March 7, 2018",
      title:
        'Via web and at Marquette Law School presentation by Patrick Sharkley and Organizations "Community Organizations&Decline of Crime in American Cities"',
    },
    {
      date: "March-Dec 2018",
      title:
        "Gardening, designing, and other events sponsored by CCHD, GMF, Thrivent. Starting March 10th at 9am: Gardening, declutter, and Tax information",
    },
    {
      date: "April 6th, 2018",
      title:
        "Depart 10am sharp Logic Puzzle Museum sponsored by CCHD for conflict resolution skills",
    },
    {
      date: "March- Aug 2018",
      title:
        "Cardio Line Health and Wellness, music appreciation and lifelong learning held at Westside, participation sponsored by CCHD. Mondays 7:00-8:30pm",
    },
    {
      date: "April 1-28, 2018",
      title:
        "Identifying Seniors, Vets, Disabled invidividuals and those in need for help with home improvements in cooperation with CHWC and Thrivent",
    },
    { date: "April 24th, 2018", title: "UWM service learners project" },
    {
      date: "May 5, 2018",
      title: "Gardening, declutter, designing, planting day. Saturdays 9-11am",
    },
    {
      date: "May 15-17, 2018",
      title: "Reclaiming Properties Conference sponsored by CCHD",
    },
    {
      date: "March 2018-Nov 2018",
      title: "Reclaiming Properties webinars monthly 4th Thurs",
    },
    { date: "Monthly", title: "Webinars through Mental Health Coalition USA" },
    {
      date: "2018",
      title:
        "Leadership meeting and conference calls at committee heads discretion",
    },
    {
      date: "May 16th, May 23rd",
      title: "PNC Webinar with Barbara Corcoran of Shark Tank",
    },
    {
      date: "May 19th, 2018",
      title:
        "Big Harambee Clean up with organizations, churches, business, organizers united. Sponsored by Bader Philanthropies with Resident and organization volunteers. Clean up: 9am meet at Grace 12noon after party for volunteers. Inaugural clean up",
    },
    {
      date: "June 11-14, 2018",
      title: "CHWC neighborhood improvement and beautification",
    },
    {
      date: "April-June 2018",
      title:
        "Elderly Assist with safety, improvements, and doorbell find sponsored by Thrivent Financial",
    },
    {
      date: "June 23, 2018",
      title:
        "Internal Conflict Resolution P.1 taught by Rachel Campbell and sponsored by CCHD",
    },
    {
      date: "August 4, 2018",
      title:
        "Yesterday's Negro League Baseball Players Bridging the Gaps exhibition, learning of history and passing on traditions, and meet and greet of Living Legends. tobk participation sponsored by CCHD",
    },
    {
      date: "August 11, 2018",
      title:
        "Collaboration with Hallowed Baptist Church VBS and tobk to sponsor the Five Points Community Party. Stress Management class taught by Rachel Campbell making aromatherapy candles-class Sponsored by CCHD (40-80 individuals), repurposing and tranforming projects sponsored by GMF-Mary Nohl, and designing sponsored by MAB taught by Evelyn Patricia Terry. Various games run by tobk members and residents and members of Hallowed Baptist. HBC will also have fun and bookbags donated by PNC bank",
    },
    { date: "2019", title: "Intergenerational Variety Show-TBD for 2019" },
    {
      date: "2018-2019",
      title: "Continuing designing the Garden Park and installation of Items",
    },
    {
      date: "2018",
      title:
        "Marketplace 53212- at the 5 Points Juncture. Look for the tobk table with Rachel Campbell (wellness), Churchill Caruthers Jr. (several informational packets and sign up sheets for tobk activities and specialized service calls for attendees benefits), Kathleen Sinclair (employment opportunities and tax information)",
    },
    {
      date: "Monday, August 27th",
      title: "Closed Leadership and Board Meeting, 6pm",
    },
    {
      date: "Sept-Oct",
      title:
        "Leadership Meeting and planning- Mondays in Sept, Tues in October",
    },
    {
      date: "Sept. 22, 2018",
      title:
        "QPR Suicide Prevention Class from 10am-11:30am sharp. Sponsored by Prevent Suicide Milwaukee and CCHD",
    },
    { date: "October 9, 2018", title: "On the Table, live or via livestream" },
    {
      date: "Saturday, October 20, 2018",
      title: "Artober Event (child friendly)",
    },
    {
      date: "Monday, October 22, 2018",
      title: "Bader Philanthropies Ground opening 20 members attending",
    },
    {
      date: "Saturday, October 27, 2018",
      title: "Community Live your Dreams On the Table planning",
    },
    {
      date: "Sept- Dec 2018",
      title: "UWM Fall service learners- Multiple engagement pieces",
    },
    {
      date: "Dec 12, 2018 to current",
      title: "Lisc Monthly Community Engagement Webinars",
    },
    {
      date: "Dec 22, 2018",
      title: "Community Resource, Health, Vendor Fair 10am-3pm",
    },
  ],
  "2017": [
    {
      date: "March 11, 2017--April 2017",
      title: "Grant Writing Leadership training",
    },
    { date: "April -May 2017", title: "Harambee Listening Session" },
    {
      date: "May 6th, 2017",
      title: "Basketball Tournament with Hartford U Academy",
    },
    {
      date: "May-Nov 2017",
      title: "Gardening (every Sat 9:30am and during week as needed)",
    },
    {
      date: "July 2017 and Sept 2017",
      title: "Pop in and Have fun (special days)",
    },
    {
      date: "2017",
      title: "Garden Park Activities Monthly (check facebook for activity)",
    },
    { date: "Summer and fall 2017", title: "Educational and learning trip" },
    {
      date: "May, June, July 2017",
      title: "Brewers Games (sponsored by Brewers)",
    },
    { date: "July 3rd", title: "Bus trip to Brewers Game" },
    { date: "June 11-17", title: "Catholic Work Camp NIBD" },
    { date: "Fall 2017", title: "Leadership Training" },
    {
      date: "July 17th and July 18th",
      title:
        "Mental Health First Aid Training- 2 days with Outreach Community Health Centers, 10am -2pm",
    },
    {
      date: "Saturday, July 22nd, 2017",
      title: "Pop up and resource fair 1-5pm",
    },
    { date: "Spring and Fall Semesters 2017", title: "UWM Service Learners" },
    {
      date: "August 26th",
      title: "Grant Writing Webinar with Krista Bryson 10-12pm",
    },
    {
      date: "Sept 9th",
      title: "Garage numbering for safety (sponsors Thrivent and CCHD) 10am",
    },
    {
      date: "Sept 23rd",
      title: "Pop up for promoting peace (sponsors Thrivent and CCHD) 1-5pm",
    },
    { date: "Sept 25, 2017-Jan 2018", title: "Harambee Listening Sessions" },
    { date: "Sept 13, 2017-December 2017", title: "Dementia website training" },
    {
      date: "Sept 27",
      title: "Alderwoman Cogg's Town Hall meeting 5:30-6:30 @Shiloah Lutheran",
    },
    {
      date: "Oct 5 and Oct 12",
      title:
        "Mental Health First Aid Training 10-2pm with Outreach Community Health Center sponsored by CCHD",
    },
    {
      date: "October 2017-October 2018",
      title:
        "Heritage of Arts (contact for more information and signing up to help)- Sponsors Archdiocese CCHD, Milwaukee Arts Board, Greater Milwaukee Foundation: Mary Nohl Grant",
    },
    {
      date: "October 28, 2017",
      title:
        "Monthly Meeting - Crime Prevention through Environmental Design and Insurance information 10am sharp!!",
    },
    {
      date: "November 15, 2017-Dec 1, 2017",
      title:
        "Art in My Shoes Workshop sponsors CCHD and GMF:Mary Nolh Grant: venue Project Focal Point Community Center, 3pm set up class 4-6pm. Taught by Artist Evelyn Patricia Terryand Fonde Bridges",
    },
    {
      date: "October 2017- January 2018",
      title: "Bucks Games sponsored by Bucks Charitable Ticket Program",
    },
    {
      date: "Nov. 28th, Dec 5th, and Dec 12th",
      title: "Meetings with Helen Bader",
    },
  ],
  "2016": [
    {
      date: "Saturday March 5, 2016",
      title: "Glendale Townhomes Open House w/Vanguard",
    },
    { date: "Feb-April 2016", title: "Harambee Listening Sessions" },
    { date: "2016 season", title: "Brewer Game Attendance" },
    {
      date: "May 21, 2016 and Nov 1. 2016",
      title: "Garden and Orchard planting days",
    },
    {
      date: "June 21, 2016",
      title: "Leadership Training at Let's Get Motivated with Les Brown",
    },
    { date: "July- October 2016", title: "Pop Up Lot and Activities" },
    { date: "July 2016", title: "tobk Leadership planning and training" },
    { date: "Aug 2016", title: "Block Party with Hallowed Baptist at Lot" },
    {
      date: "October 2016",
      title: "Leadership Training at Madison Non Profit Day",
    },
    { date: "Oct 2016", title: "CPR hands only training with MFD" },
    { date: "Sept -Nov 2016", title: "Power of Atty Series with Atty Hartman" },
    {
      date: "Dec 10, 2016",
      title: "Celebrating our Seniors born 1950 and before",
    },
    { date: "Spring and Fall 2016", title: "UWM Service Learners" },
  ],
  "2015": [
    { date: "Jan 24th, 2015", title: "Resource Fair" },
    {
      date: "Sat, March 21, 2015",
      title: "Health resource Fair -Partner Westcare",
    },
    { date: "2015", title: "Elderly Tutoring and learning computers" },
    { date: "2015", title: "Youth Tutoring and mentoring" },
    { date: "March 2015", title: "Youth Roller Skating Event" },
    { date: "2015", title: "Bucks Game Attendance" },
    { date: "June, July 2015", title: "Brewers Game Attendance" },
    { date: "June 2015", title: "Garage Numbering with Safe and Sound" },
    { date: "March, April, May 2015", title: "Leadership and Board Training" },
    { date: "2015", title: "Legal seminar and clinic day" },
    { date: "2015", title: "Legislative updates" },
    {
      date: "Aug 2015",
      title: "Block Party collaboration with Hallowed Baptist",
    },
    { date: "Aug 2015", title: "Youth Talent Show (audition dates on FB)" },
    { date: "season 2015-2016", title: "Bucks Game Attendance" },
    {
      date: "Nov 2015 to 2016 and beyond",
      title:
        "Planning for 2016 tobk-Harambee and community police listening sessions",
    },
    { date: "Spring and Fall 2015", title: "UWM Service Learners" },
  ],
  "2014": [
    { date: "August 2014", title: "Block Party w Hallowed Baptist" },
    { date: "2014", title: "Legal Clinic and Seminar" },
    {
      date: "Oct 25, 2014",
      title: "Community network Social (contact for more information)",
    },
    { date: "2014", title: "HGNI/LiSC meet" },
    { date: "2014 and 2015", title: "Housing resource fairs" },
    { date: "2014", title: "Participation with Kaboom park" },
    { date: "2013-2014", title: "Sports Camps with Grace Fellowship" },
    { date: "December 2014", title: "Meet and Greet/ Year End Celebration" },
  ],
  "2013": [{ date: "2013", title: "Grassroots Training" }],
  "2012": [{ date: "2012", title: "Smart Growth principles started" }],
  "2011": [
    {
      date: "2011 to current",
      title: "Artery participation started (now Beerline)",
    },
  ],
  "2020-2022": [
    { date: "2020-2022", title: "Virtual Webinars/Seminars/Training" },
  ],
  Ongoing: [
    {
      date: "Ongoing",
      title: "Climate change monthly meetings through webinar",
    },
    { date: "Sept-Nov", title: "Working with UWM students" },
  ],
};

// Function to determine the background color based on the year
const getBackgroundColor = (year: string): string => {
  switch (year) {
    case "2024":
      return "bg-emerald-50";
    case "2023":
      return "bg-teal-50";
    case "2022":
      return "bg-cyan-50";
    case "2021":
      return "bg-sky-50";
    case "2020":
      return "bg-blue-50";
    case "2019":
      return "bg-indigo-50";
    case "2018":
      return "bg-violet-50";
    case "2017":
      return "bg-purple-50";
    case "2016":
      return "bg-fuchsia-50";
    case "2015":
      return "bg-pink-50";
    case "2014":
      return "bg-rose-50";
    case "2013":
      return "bg-red-50";
    case "2012":
      return "bg-orange-50";
    case "2011":
      return "bg-amber-50";
    case "2020-2022":
      return "bg-green-50";
    case "Ongoing":
      return "bg-yellow-50";
    default:
      return "bg-gray-50";
  }
};

// Function to extract time from date if available
const getTimeFromDate = (date: string): string => {
  if (date.includes("am")) return date.split("am")[0].trim() + "AM";
  if (date.includes("pm")) return date.split("pm")[0].trim() + "PM";
  return "";
};

export default function PastEvents() {
  // Sort years in reverse chronological order (most recent first)
  const sortedYears = Object.keys(events).sort((a, b) => {
    // Handle special cases
    if (a === "Ongoing") return -1;
    if (b === "Ongoing") return 1;
    if (a === "2020-2022") return -1;
    if (b === "2020-2022") return 1;

    // For regular years, sort numerically in reverse order
    return Number.parseInt(b) - Number.parseInt(a);
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-slate-50">
      <h1 className="text-2xl font-bold mb-6">All Past Events</h1>

      <ScrollArea className="h-[600px] pr-4">
        <div className="space-y-4">
          {sortedYears.map((year) => (
            <div key={year} className="mb-8">
              <h2 className="text-xl font-semibold mb-4">{year}</h2>
              <div className="space-y-4">
                {events[year].map((event, index) => {
                  const timeInfo = getTimeFromDate(event.date);

                  return (
                    <Card
                      key={index}
                      className="overflow-hidden border shadow-sm"
                    >
                      <CardContent className="p-0">
                        <div className="flex">
                          <div
                            className={`${getBackgroundColor(
                              year
                            )} p-4 flex flex-col items-center justify-center min-w-[120px] text-center`}
                          >
                            <div className="text-xs font-medium text-gray-600">
                              {event.date}
                            </div>
                            {timeInfo && (
                              <div className="text-xl font-bold">
                                {timeInfo}
                              </div>
                            )}
                          </div>

                          <div className="flex-1 p-4">
                            <h3 className="text-md font-semibold">
                              {event.title}
                            </h3>
                          </div>

                          <div className="flex items-center pr-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center gap-1"
                            >
                              <Plus className="h-4 w-4" />
                              <span className="text-xs">Add to calendar</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}
