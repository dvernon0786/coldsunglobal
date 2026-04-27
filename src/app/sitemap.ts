import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://coldsunglobal.com";
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" },
    { url: "/about", priority: 0.9, changeFrequency: "monthly" },
    { url: "/leadership", priority: 0.8, changeFrequency: "monthly" },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" },
    { url: "/clients", priority: 0.8, changeFrequency: "monthly" },
    { url: "/resources", priority: 0.7, changeFrequency: "weekly" },
    // Solutions
    { url: "/solutions", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions/salesforce", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions/agentforce", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions/field-service", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions/revenue-management", priority: 0.8, changeFrequency: "monthly" },
    { url: "/solutions/erp", priority: 0.9, changeFrequency: "monthly" },
    { url: "/solutions/servicenow", priority: 0.8, changeFrequency: "monthly" },
    // Services
    { url: "/services", priority: 0.9, changeFrequency: "monthly" },
    { url: "/services/consulting", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/implementation", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/managed-services", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/change-management", priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/migration", priority: 0.8, changeFrequency: "monthly" },
    { url: "/services/training", priority: 0.7, changeFrequency: "monthly" },
    { url: "/services/talent-management", priority: 0.7, changeFrequency: "monthly" },
    // Industries
    { url: "/industries", priority: 0.9, changeFrequency: "monthly" },
    { url: "/industries/energy", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/utilities", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/healthcare", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/telecom", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/manufacturing", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/professional-services", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/high-tech", priority: 0.8, changeFrequency: "monthly" },
    { url: "/industries/education", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/nonprofit", priority: 0.7, changeFrequency: "monthly" },
    { url: "/industries/home-services", priority: 0.7, changeFrequency: "monthly" },
  ] as const;

  return routes.map(r => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
