import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bachelors of Data Science | The Foundrys",
  description: "Master Statistics, Big Data, and Predictive Modeling. Build real-world data-driven applications. The most advanced Data Science course in India.",
  keywords: ["Data Science Course India", "Big Data Training Hyderabad", "Best Data Science College", "Data Scientist Career", "Predictive Analytics Course"],
  openGraph: {
    title: "Bachelors of Data Science | The Foundrys",
    description: "Master Statistics, Big Data, and Predictive Modeling. Build real-world data-driven applications.",
    images: ["/datascience-hero.jpg"],
  },
};

export default function DataScienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
