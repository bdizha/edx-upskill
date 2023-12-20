const courseMockFilters = [
  {
    label: "Learning type",
    key: "learning_type",
    filters: [
      "Certificate",
      "Course",
      "Executive Education",
      "Masters",
      "MicroBachelors",
      "MicroMasters",
      "Professional Certificate",
      "XSeries",
    ],
  },
    {
      label: "Subject",
      key: "subject",
      filters: [
        "Architecture",
        "Biology & Life Sciences",
        "Business & Management",
        "Communication",
        "Computer Science",
        "Law",
        "Math",
        "Medicine",
        "Music",
        "Philosophy & Ethics",
        "Physics",
        "Science",
        "Social Sciences",
      ],
    },
    {
      label: "Skill",
      key: "skill",
      filters: [
        "Algebra",
        "Algorithm Design",
        "Algorithms",
        "Animations",
        "Apache Spark",
        "Artificial Intelligence",
        "Artificial Neural Networks",
        "Augmented Reality",
        "Automation",
        "Basic Math",
        "Big Data",
        "Biology",
        "Business Analytics",
        "C (Programming Language)",
        "Computational Thinking",
        "Computer Architecture",
        "Teaching",
        "Telecommunications",
        "User Interface",
      ],
    },
    {
      label: "Availability",
      key: "availability",
      filters: ["Archived", "Available now", "Upcoming"],
    },
    {
      label: "Program",
      key: "program",
      filters: [
        "Certificate",
        "Masters",
        "MicroBachelors",
        "MicroMasters",
        "Professional Certificate",
      ],
    },
    {
      label: "Level",
      key: "level",
      filters: ["Advanced", "Intermediate", "Introductory"],
    },
    {
      label: "School & Partner",
      key: "school_partner",
      filters: [
        "Columbia University",
        "Cooper Union",
        "Cornell University",
        "Curtin University",
        "Databricks",
        "Davidson College",
        "Delft University of Technology",
        "EC-Council",
        "École polytechnique fédérale de Lausanne",
        "edX",
        "Massachusetts Institute of TechnologySchool & Partner",
        "School & Partner",
        "Arm Education",
        "Berklee College of Music",
        "Boston University",
        "Caltech",
        "Chalmers University of Technology",
        "Codio",
        "Columbia University",
      ],
    },
  ];

  courseMockFilters.forEach((item) => {
    item.filters = item.filters.map((filter) => {
      return { key: filter.toLowerCase().replace(/ /g, '_'), label: filter };
    });
  });
  
  export default courseMockFilters;