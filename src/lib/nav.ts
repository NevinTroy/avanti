export type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const navLinks: NavLink[] = [
  {
    label: "Landscaping",
    href: "/services/landscaping",
    children: [
      { label: "Landscape design", href: "/services/landscaping" },
      { label: "Garden design", href: "/services/landscaping" },
      { label: "Sod installation", href: "/services/landscaping" },
      { label: "Planting", href: "/services/landscaping" },
      { label: "Landscape lighting", href: "/services/landscaping" },
      { label: "Grading", href: "/services/landscaping" },
      { label: "Irrigation & sprinkler", href: "/services/landscaping" },
      { label: "Pool landscaping", href: "/services/landscaping" },
    ],
  },
  {
    label: "Stonework",
    href: "/services/stonework",
    children: [
      { label: "Flagstone installation & repair", href: "/services/stonework" },
      { label: "Interlock repair", href: "/services/stonework" },
      { label: "Interlocking services", href: "/services/stonework" },
      { label: "Interlocking backyard", href: "/services/stonework" },
      { label: "Interlocking patio", href: "/services/stonework" },
      { label: "Interlocking driveway", href: "/services/stonework" },
      { label: "Interlocking walkway", href: "/services/stonework" },
      { label: "Retaining walls", href: "/services/stonework" },
    ],
  },
  {
    label: "Woodwork",
    href: "/services/woodwork",
    children: [
      { label: "Decks", href: "/services/woodwork" },
      { label: "Fences", href: "/services/woodwork" },
      { label: "Pergola", href: "/services/woodwork" },
      { label: "Cabana", href: "/services/woodwork" },
      { label: "Gazebo", href: "/services/woodwork" },
      { label: "Rooftop patio", href: "/services/woodwork" },
      { label: "Custom sheds", href: "/services/woodwork" },
      { label: "Custom carport builders", href: "/services/woodwork" },
    ],
  },
  {
    label: "Swimming Pools",
    href: "/services/swimming-pools",
    children: [
      { label: "Inground pools", href: "/services/swimming-pools" },
      { label: "Fiberglass pools", href: "/services/swimming-pools" },
      { label: "ICF pools", href: "/services/swimming-pools" },
      { label: "Concrete pools", href: "/services/swimming-pools" },
      { label: "Vinyl pools", href: "/services/swimming-pools" },
    ],
  },
  {
    label: "Other",
    href: "/services/other-services",
    children: [
      { label: "Concrete", href: "/services/other-services" },
      { label: "Demolition", href: "/services/other-services" },
      { label: "Excavation", href: "/services/other-services" },
      { label: "Foundation waterproofing", href: "/services/other-services" },
      { label: "Foundation repair", href: "/services/other-services" },
      { label: "Foundation services", href: "/services/other-services" },
      { label: "Underpinning", href: "/services/other-services" },
      { label: "Mini bins", href: "/services/other-services" },
      { label: "Snow removal Toronto", href: "/services/other-services" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Contacts", href: "/contacts" },
];


