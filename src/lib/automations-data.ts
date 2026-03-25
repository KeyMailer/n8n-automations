export type AutomationStatus = "active" | "inactive";

export interface Automation {
  id: string;
  name: string;
  description: string;
  status: AutomationStatus;
  trigger: string;
  triggerLink: string;
  document: string;
  documentLink: string;
  wikiLink: string;
  hasKeys: boolean;
  tools: string[];
  dataflow: string[];
}

export const automations: Automation[] = [
  {
    id: "TgnpcbIeuchbLqrL",
    name: "Newsletter Booking",
    description:
      "The purpose of this automation is to avoid overbooking newsletters such as Influencer and Press, allowing only 13 total bookings per day across all placement types.",
    status: "active",
    trigger: "Webhook",
    triggerLink: "https://neightn-booking.indie-demo.com/newsletter-booking",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1DnlRKLkrYxVK5uNoF7I9DpkQf0hIz_Aec3E3CDdNvVU/edit?gid=450992887#gid=450992887",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Newsletter_Booking",
    hasKeys: true,
    tools: ["Webhook", "Apps Script", "Google Sheet", "Slack"],
    dataflow: [
      "This automation will run when a user fills out the form",
      "For Influencer, bookings are only allowed on Monday and Friday",
      "For Press, bookings are allowed on Monday, Wednesday, and Friday",
      "It will send a request to Apps Script to call the locking concurrency",
      "It will check if the scheduled date and placement are not fully booked",
      "The system will then save the booking and send a notification to Slack",
    ],
  },
  {
    id: "posYxHcAHOobSFYn",
    name: "Games Around The World",
    description:
      "Scrape the Games Around the World website (category: All) and extract the game name, description, genre, release date, developer, publisher, platform, player, language, Discord link, website link, and Steam link.",
    status: "active",
    trigger: "Manual",
    triggerLink: "",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1mQR4Yo3UQVY_FpgehhY7yo9zz_I8M3gjwmcpAglRkkE/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Games_Around_The_World",
    hasKeys: false,
    tools: ["Puppeteer", "Google Sheet"],
    dataflow: [
      "Start automation workflow",
      "Fetch all games from Games Around the World (Category: All)",
      "Extract list of game detail URLs",
      "Iterate through each game URL",
      "Scrape game details (name, description, genre, release date, developer, publisher, platform, player, languages, Discord link, website link, Steam link)",
      "Store extracted data in Google Sheets",
      "Repeat until all games are processed",
      "End workflow",
    ],
  },
  {
    id: "m1sxvWMsizku4KH1",
    name: "Event Promo",
    description:
      "This automation will check the Steam tags input in a Google Sheet. It will then check Steam for matching tags. If a match is found, it will retrieve the games related to those tags and collect the game name, publisher, developer, and Steam link. The data will then be cross-referenced in Madmin to check if the game exists there and to retrieve the publisher and their contact information.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/c1e81cd2-5bc4-4ed5-b83b-7d4652353d7d",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/11YQ20YA4Khsb6l60nHGYDe9aSJJ01S8LJ26UlSY7wtY/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/Event_Promo",
    hasKeys: false,
    tools: ["Steam", "Madmin", "Google Sheet"],
    dataflow: [
      "Form submission triggers automation",
      "Read Steam tags from Google Sheet",
      "Search Steam for matching tags",
      "Retrieve games associated with the tags",
      "Loop through each game",
      "Extract game details (name, publisher, developer, Steam link)",
      "Cross-reference the game in Madmin",
      "Retrieve publisher and contact information if available",
      "Save results to Google Sheet",
      "Repeat until all tags and games are processed",
      "End workflow",
    ],
  },
  {
    id: "KS3gdPQY1bA0lBRP",
    name: "Recent Release Game",
    description:
      "The purpose of this automation is to get the recent game release of the organization from Madmin and Steam",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/e7d07e11-48a7-4291-b7c4-58e02a867a4d",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1apzXbgiOGMUsJIpnfvH-7c2qwJnVWqBedIcE7e7VVtM/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Recent_Release_Game",
    hasKeys: false,
    tools: ["Madmin", "Puppeteer", "Steam", "Google Sheet"],
    dataflow: [
      "User manually inputs data into Google Sheet",
      "User types 'Run' in the form to trigger the automation",

      "Form contains 3 optional fields:",
      "  └─ Source → where the data will be retrieved from",
      "  └─ Madmin limit → number of results from Madmin",
      "  └─ Steam limit → number of results from Steam",

      "Retrieve data from Google Sheet",
      "  └─ Only fetch rows where status = 'active'",

      "Check Source field",
      "  └─ Determine whether to prioritize Madmin, Steam, or both",

      "If Madmin is included:",
      "  └─ Apply Madmin prioritization:",
      "        1. Prioritize release_date",
      "        2. If release_date is null → use raw_release_date",
      "        3. Rank raw_release_date by priority:",
      "              • Q1 2026",
      "              • 2026",
      "              • Coming Soon",
      "              • To Be Announced",
      "        4. Retrieve data closest to today (exclude today)",
      "  └─ Apply Madmin limit",

      "If Steam is included:",
      "  └─ Scrape data from Steam",
      "  └─ Apply Steam limit",

      "Combine processed results",

      "Save the final output",
    ],
  },
  {
    id: "HeB6iFwUdAPy77Ea",
    name: "PGC Events - Intercom",
    description:
      "The purpose of this automation is to check whether the event attendees’ names already exist in our Intercom platform. Also, if the attendees’ company match with Intercom publisher field. If they do, we retrieve the email address. ",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/050f9844-3843-40ed-9dec-c288f94e6506",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1OnIEEPkAKocIF7mUMTQb-OWoWgwkTkxbbYQdm5xYYlo/edit?gid=563145277#gid=563145277",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/PGC_Events_-_Intercom",
    hasKeys: false,
    tools: ["Intercom", "Google Sheet"],
    dataflow: [
      "Search attendee name & publisher in Intercom",
      "Retrieve data if the attendee name & attendee company matches to Intercom name & publisher field ",
      "Save gathered data from Intercom",
    ],
  },
  {
    id: "7TGQeYNu0PpP0iGA",
    name: "PGC Events - ActiveCampaign",
    description:
      "The purpose of this automation is to check whether the event attendees’ names already exist in our ActiveCampaign platform. If they do, we retrieve the email address. However, when attendees company doesn't match with orgname field from AC we don't retrieve it. We only retrieve the email address if the attendees name is match with AC name, also if attendees company is match with AC orgname.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/4f514fbf-fba3-4b09-b7c0-578599872d81",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1OnIEEPkAKocIF7mUMTQb-OWoWgwkTkxbbYQdm5xYYlo/edit?gid=563145277#gid=563145277",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/PGC_Events_-_ActiveCampaign",
    hasKeys: false,
    tools: ["ActiveCampaign", "Google Sheet"],
    dataflow: [
      "Search attendee name in ActiveCampaign",
      "Retrieve email only if name matches and company matches ActiveCampaign orgname",
      "Save gathered data from ActiveCampaign",
    ],
  },
  {
    id: "hbJQVB0Z1SJVR9Ym",
    name: "Similarweb v2",
    description:
      "Unlike the Similarweb v1 workflow, which only retrieves the visits for approved_domain, this SimilarWeb v2 workflow will get all data from the API response and save it to the Google Sheet.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/55652452-a7ae-46c3-b437-4bd81206cdb7",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/18MR1ZohK-yZzKUCTU9VFD27607kdA_C6VdCS4afvqi4/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Similarweb_v2",
    hasKeys: false,
    tools: ["Similarweb API", "Google Sheet"],
    dataflow: [
      "Import the downloaded CSV data (check document README)",
      "Copy only the gamer_id and approved_domain columns from the CSV",
      "Paste the copied data into the 'List' sheet under gamer_id and approved_domain columns",
      "User types 'Run' in the form to trigger the workflow",
      "Use API to fetch all response data related to each approved domain",
      "Process and gather the returned API data",
      "Update the 'List' sheet based on the gathered API data",
    ],
  },
  {
    id: "vDQQJclc3AXrH7fi",
    name: "Similarweb v1",
    description:
      "This workflow automation removes the need for manual checking of domain visit data in Similarweb. The process automatically retrieves the approved_domain from a CSV file, uses it to search data in Similarweb, and extracts the visit metrics such as Visits or EstimatedMonthlyVisits. The retrieved data is then used to update the CSV file, ensuring accurate and efficient domain traffic tracking without manual input.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/2aaf597c-b175-438e-b2d6-a6bcbbfc9504",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/13zGM11fO-TbN_ayA4tQ4oZmlWZZQ-jCC42kDjK1vhNU/edit?gid=0#gid=0",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Similarweb_v1",
    hasKeys: false,
    tools: ["Similarweb API", "Google Sheet"],
    dataflow: [
      "Import the downloaded CSV data (check document README)",
      "Add updated_similarweb_api_data column in List sheet",
      "User types 'Run' in the form to trigger the workflow",
      "Use API to get domain visits data (if visits is empty, use estimatedMonthlyVisits as fallback)",
      "Update the List sheet based on gathered API data",
    ],
  },
  {
    id: "Ea0zH2LzlEoPGmR8",
    name: "AL - New & New Lead",
    description:
      "This automation triggers when the user types 'Run' in form. It then retrieves data from Google Sheets, uses that data to check if it exists in Madmin, verifies the data in Intercom and ActiveCampaign, and if the data does not exist in either Intercom or ActiveCampaign, it is saved in 'No Result' for enrichment purposes.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/d362e9c0-fe60-46a2-9e55-f4106376397e",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1tcH9p_Zx-4UlC3fpccLAjdCWNFlDaS_Hr5eueEv2aBA/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
    dataflow: [
      "User types 'Run' in the form to trigger the workflow",
      "Retrieve data from Google Sheets",
      "Check if the data exists in Madmin",
      "Check the data in Intercom",
      "  └─ Condition: user_id must start with 'p_'",
      "  └─ Condition: publisher_name must match Publisher/Developer Name in Intercom",
      "  └─ If conditions are met, save the data",
      "  └─ If conditions are not met, do not save",
      "Get all contacts related to the account from Intercom",
      "Check the data in ActiveCampaign",
      "  └─ If exist, save the data",
      "  └─ If not, do nothing",
      "If data does not exist in both platforms, save the data to 'No Result'",
    ],
  },
  {
    id: "UvmzeCAdaJTfCQbo",
    name: "AL - New Steam Release",
    description:
      "This automation triggers when the user types 'Run' in form. It then retrieves data from Google Sheets, uses that data to check if it exists in Madmin, verifies the data in Intercom and ActiveCampaign, and if the data does not exist in either Intercom or ActiveCampaign, it is saved in 'No Result' for enrichment purposes.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/9e403b1c-2a40-435c-a290-2556ba930a7c",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1t9jYjDAbIkXz1zGxd41DXJSaCgaBnqPZ7hlSF2d0Tos/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
    dataflow: [
      "User types 'Run' in the form to trigger the workflow",
      "Retrieve data from Google Sheets",
      "Check if the data exists in Madmin",
      "Check the data in Intercom",
      "  └─ Condition: user_id must start with 'p_'",
      "  └─ Condition: publisher_name must match Publisher/Developer Name in Intercom",
      "  └─ If conditions are met, save the data",
      "  └─ If conditions are not met, do not save",
      "Get all contacts related to the account from Intercom",
      "Check the data in ActiveCampaign",
      "  └─ If exist, save the data",
      "  └─ If not, do nothing",
      "If data does not exist in both platforms, save the data to 'No Result'",
    ],
  },
  {
    id: "wpt0K77zlXSwJlZK",
    name: "AL - Reactivation Leadgen",
    description:
      "This automation triggers when the user types 'Run' in form. It then retrieves data from Google Sheets, uses that data to check if it exists in Madmin, verifies the data in Intercom and ActiveCampaign, and if the data does not exist in either Intercom or ActiveCampaign, it is saved in 'No Result' for enrichment purposes.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/f3872300-7ec6-44a6-85e9-f720738927b3",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/18BX6R492N903_GlhGMQtd54Ofbw1YO1t2C7glzRRXXg/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
    dataflow: [
      "User types 'Run' in the form to trigger the workflow",
      "Retrieve data from Google Sheets",
      "Check if the data exists in Madmin",
      "Check the data in Intercom",
      "  └─ Condition: user_id must start with 'p_'",
      "  └─ Condition: publisher_name must match Publisher/Developer Name in Intercom",
      "  └─ If conditions are met, save the data",
      "  └─ If conditions are not met, do not save",
      "Get all contacts related to the account from Intercom",
      "Check the data in ActiveCampaign",
      "  └─ If exist, save the data",
      "  └─ If not, do nothing",
      "If data does not exist in both platforms, save the data to 'No Result'",
    ],
  },
  {
    id: "GmCiCm7KFOvq2O3Y",
    name: "AL - Leadgen - TBA",
    description:
      "This automation triggers when the user types 'Run' in form. It then retrieves data from Google Sheets, uses that data to check if it exists in Madmin, verifies the data in Intercom and ActiveCampaign, and if the data does not exist in either Intercom or ActiveCampaign, it is saved in 'No Result' for enrichment purposes.",
    status: "active",
    trigger: "Form",
    triggerLink:
      "https://neightn.indie-demo.com/form/656cf243-8999-45ef-b178-ae322165231b",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/1kVe9Iyy4PL9LxCf8PzRzjdQ8XoEsU7P7qAdeVFCcLLU/edit?gid=0#gid=0",
    wikiLink: "https://redmine.lifejak.com/projects/keymailer/wiki/AutoLead",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Google Sheet"],
    dataflow: [
      "User types 'Run' in the form to trigger the workflow",
      "Retrieve data from Google Sheets",
      "Check if the data exists in Madmin",
      "Check the data in Intercom",
      "  └─ Condition: user_id must start with 'p_'",
      "  └─ Condition: publisher_name must match Publisher/Developer Name in Intercom",
      "  └─ If conditions are met, save the data",
      "  └─ If conditions are not met, do not save",
      "Get all contacts related to the account from Intercom",
      "Check the data in ActiveCampaign",
      "  └─ If exist, save the data",
      "  └─ If not, do nothing",
      "If data does not exist in both platforms, save the data to 'No Result'",
    ],
  },

  {
    id: "9Mki2Epwibq78qq8",
    name: "Lead Generation",
    description:
      "This automation triggers automatically every 10:10 AM UK time. Retrieve the latest scraped campaign names from Google Sheets, check if each name exists in Madmin, and if so, obtain the publisher and contact information(user). Verify the contact details in Intercom and gather any necessary information. Check if the organization is active in ActiveCampaigns, and finally, save the verified leads back into Google Sheets.",
    status: "active",
    trigger: "Cron Schedule",
    triggerLink: "",
    document: "Google Sheet",
    documentLink:
      "https://docs.google.com/spreadsheets/d/183FnNcP4inwXqtFztFaekdsoghjI6-EXxPtra_SEgY4/edit?gid=1886736831#gid=1886736831",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Lead_Generation",
    hasKeys: false,
    tools: ["Madmin", "Intercom", "ActiveCampaign", "Steam", "Google Sheet"],
    dataflow: [
      "Get latest scraped data from Google Sheets",
      "Check if data exists in Madmin",
      "  └─ If yes, get contacts from Madmin",
      "  └─ If no, use third-party API to get contacts",
      "Check if data exists in Intercom and ActiveCampaign",
      "  └─ If yes, store the data",
      "  └─ If no, do nothing",
    ],
  },

  {
    id: "BeQYDPBjaZUzXhSp",
    name: "Tiktok Comment Scraper",
    description:
      "This automation automatically collects TikTok comments from video URLs stored in Google Sheets using Apify for scraping. The extracted comments are then saved back into Google Sheets for easy analysis and research.",
    status: "inactive",
    trigger: "Manual",
    triggerLink: "",
    document: "",
    documentLink: "",
    wikiLink:
      "https://redmine.lifejak.com/projects/keymailer/wiki/Tiktok_Comment_Scraper",
    hasKeys: false,
    tools: ["Apify", "Google Sheet"],
    dataflow: [
      "Get the video URL from Google Sheet",
      "Pass the video URL to Apify to scrape TikTok comments",
      "  └─ Apify fetches comments from the TikTok video",
      "Store the scraped comments back into Google Sheets",
    ],
  },
];
