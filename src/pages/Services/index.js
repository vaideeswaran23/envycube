import React from "react";
import CardContainer from "./Cards";
import styles from "./Services.module.scss";
import ArchitectureDesign from "../../assets/works/services/architecturedesign.jpg";
import Interiordesign from "../../assets/works/services/interiordesign.jpg";
import LandscapeArchitecture from "../../assets/works/services/landscape architecture.jpg";

const serviceCards = [
  {
    imageSrc: ArchitectureDesign,
    header: "Architecure Design",
    description:
      "Feasibility Studies, Site Analysis, Space Planning, Massing, Building Approval Liasoning, Soil Testing, Structural Design, HVAC design, MEP Design, Natural Lighting and Ventilation Design, Solar Passive Design, Engineering and Working Drawings.",
  },
  {
    imageSrc: Interiordesign,
    header: "Interior Design",
    description:
      "Site Measurement, Space Planning, Furniture Layout, Mood Board Presentation, Conceptual Sketches, 3D Visualization, Panoramic Interior Views, Working Drawings, Bill of Quantity, Material Specifications, Services Design, Quality Checks, Snag List, Shopping Visits Design, Natural Lighting and Ventilation Design, Solar Passive Design, Engineering and Working Drawings.",
  },
  {
    imageSrc: LandscapeArchitecture,
    header: "Landscape Architecture",
    description:
      "Site Analysis, Shadow Study, Site Planning, Softscape Design, Hardscape Design, Draining Design, Material Pallete, Play Area Design, Water Body Design, Plant Specification, Irrigation Scheme, Outdoor Lighting Design, Aerial Views.",
  },
  {
    imageSrc: ArchitectureDesign,
    header: "Project Management",
    description:
      "Master Schedule, Project Budget, Progress Meeting, Site Program Plan, Consultant Management, Contract Administration, Cash Flow Projections, Tender Management, Bid Reviews, Cost Optimizations, Time Management, Value Engineering, Progress Reports, Quality Control, Handover Documentation, Vendor Payment Approvals.",
  },
  {
    imageSrc: Interiordesign,
    header: "Turnkey Contracting",
    description:
      "Bill of Quantity, Composite Quotations, Material Specifications, Finishes Schedule, Execution Schedule, Shop Drawings, Site Measurements, Factory Cut Fit Outs, Storage Management, Weekly Progress Reports, Change Request Administration, Snag Rectifications, Warranty Certification, Quality Control, Handing Over Agreement.",
  },
  {
    imageSrc: LandscapeArchitecture,
    header: "Civil Construction",
    description:
      "Site Mobilization, Storage and Utilities Management, Material Procurement, Schedule Optimization, Site Progress Report, Change Request Management, Strength Test Reports, Labor Management, Health and Safety Standards, Quality Assurance and Quality Control, Sub-contractor Management, Post Occupancy Support.",
  },
];

const Services = () => {
  return (
    <div className={styles.containter}>
      <CardContainer cards={serviceCards} />
    </div>
  );
};

export default Services;
