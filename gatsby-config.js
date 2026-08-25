const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://nezarbr.github.io/`,
    name: 'Nezar Boujida',
    title: `Nezar Boujida | Freelance AI Engineer`,
    description: `Freelance AI Engineer · LLM Systems & RAG · Production ML on Databricks`,
    author: 'Nezar Boujida',
    github: `https://github.com/Nezarbr`,
    linkedin: `https://www.linkedin.com/in/nezar-boujida/`,
    about: `
        I’m Nezar, a freelance AI engineer based in Paris and available remotely. I hold an engineering degree in Applied Mathematics and Computer Science from Polytech Sorbonne.
        I scope, build and own production LLM systems: evaluation benchmarks, retrieval-augmented generation, and Spark-scale batch inference on Databricks. I am strongest on the unglamorous half of that work: deciding which model to trust, diagnosing why a classifier has stopped improving, and controlling what inference costs at volume.
        Recent freelance work includes DeepOCT, a clinical decision-support application for diabetic macular edema built for the Faculty of Medicine and Pharmacy in Rabat and validated against expert ophthalmologists. Beyond that my work spans retrieval-augmented QA, fraud detection under extreme class imbalance, recommender systems, and time-series forecasting.
        In my free time, I enjoy long-distance running, traveling, and discovering new places, always on the lookout for fresh challenges to learn and grow.
    `,
    projects: [
      {
        name: "DeepOCT: Clinical Decision Support for Diabetic Macular Edema",
        description:
          "Built for the Faculty of Medicine and Pharmacy (CHU Ibn Sina), Rabat. A convolutional neural network detects 8 OCT biomarkers on macular scans; a GPT-4o layer turns those detections into a diagnostic synthesis, treatment plan and anatomo-visual prognosis, behind a Flask web application with patient records and longitudinal follow-up. Validated against two expert ophthalmologists on 100 annotated eyes with 5-fold cross-validation, reaching 87% overall agreement with expert reading. The two biomarkers the model under-identified were deliberately left editable by the clinician rather than auto-applied. A study prototype, not a deployed clinical tool.",
        link: "#"
      },
      {
        name: "XGBoost for Ultra-Imbalanced Fraud Detection",
        description:
          "Ranks 587,299 anonymized card transactions by fraud risk for a manual review queue, at 0.24% fraud prevalence. Temporal, geographic and K-means currency risk-bucket features; surfaces fraud 167x better than chance (Average Precision 0.672 against a 0.0040 prevalence baseline) on a chronologically held-out December.",
        link: "/blog/my-fifth-blog/"
      },
      {
        name: "Derivation of Cochran's Formula for Sample Size Determination",
        description:
          "Derived Cochran’s formula by inverting the margin-of-error equation—leveraging the Central Limit Theorem to compute required sample sizes for means and proportions at a given confidence level.",
        link: "/blog/my-second-article/"
      },
      {
        name: 'Optimizing Automotive Logistics: Enhancing Efficiency in Vehicle Transportation Services',
        description:
          'Built and evaluated a two-tower recommender as an alternative to manual driver selection, shortlisting ~100 candidates per transport request from a 3,400-driver pool. Diagnosed attendance and regional bias as the cause of poor recommendation coverage (20% of drivers held 77% of historical requests), lifting the share of the pool surfaced from 9% to 40%.',
        link: '/blog/my-fourth-blog/'
      },
      {
        name: "Traffic Modeling and Forecasting Using Sensor Data in Paris",
        description:
          'Analyzed traffic patterns from 3,500 sensors in Paris to identify congestion trends and relationships between vehicle flow and road occupancy, with plans to build forecasting models and account for geographical dependencies.',
        link: '#'
      },
      {
        name: "Parallelization Strategies for Numerical Simulation of Heat Transfer in CPU Heatsinks",
        description:
          'Conducted a parallelized numerical simulation of heatsink dynamics in AMD EPYC CPUs, leveraging fine mesh grids to improve thermal modeling accuracy while reducing computation time.',
        link: '/blog/my-first-blog/'
      },
      {
        name: 'Enhancing Execution Speed of White Noise Generation through Parallelization and Vectorization',
        description:
          'Accelerated FFT processing of white noise by leveraging OpenMP parallelization and AVX2 vectorization, significantly improving execution speed.',
        link: '/blog/my-second-blog/'
      },
      {
        name: "Ride-Hailing Trends in New York City: Uber, Lyft, and Via Operations Analysis",
        description:
          'Analyzed fare pricing, demand patterns, and borough-specific dynamics of Uber, Lyft, and Via in NYC using trip data from January to May 2021, uncovering insights into the competitive landscape and operational challenges.',
        link: '/blog/my-third-blog/'
      },
    ],
    experience: [
      {
        name: 'Launchmetrics',
        description: 'AI Engineer, June 2024 - Present',
        link: 'https://www.launchmetrics.com/fr'
      },
      {
        name: 'Faculty of Medicine and Pharmacy (CHU Ibn Sina), Rabat',
        description: 'Freelance AI Engineer, June 2024 - March 2025',
        link: 'https://fmp.um5.ac.ma/'
      },
      {
        name: 'Hiflow',
        description: 'Machine Learning Engineer Intern, September 2023 - April 2024',
        link: 'https://www.hiflow.com/fr-fr'
      },
      {
        name: 'Datategy',
        description: 'Data Scientist Intern, June 2023 - September 2023',
        link: 'https://www.datategy.net/'
      },
    ],
    skills: [
      {
        name: 'Programming Languages',
        description: 'Python, R, C, C++, SQL'
      },
      {
        name: 'LLM and AI Engineering',
        description:
          'LLM evaluation and benchmarking, RAG, fine-tuning (LoRA), prompt engineering, embeddings, text classification, topic modeling, NLI, Hugging Face Transformers'
      },
      {
        name: 'Data Science and Machine Learning',
        description:
          'Time Series Analysis, Predictive Modeling, Feature Engineering, Neural Networks, Statistical Analysis (Scikit-learn, PyTorch)'
      },
      {
        name: 'Data, Cloud and MLOps',
        description:
          'Batch ETL, workflow orchestration, data-quality testing, performance optimization (PySpark, Databricks, Delta Lake, AWS, Docker, Airflow, MLflow, Poetry, soda, pytest)'
      },
      {
        name: 'Data Visualization and Dashboards',
        description:
          'Plotly, Dash, Seaborn, Matplotlib, Folium, Superset, Metabase'
      },
      {
        name: 'Soft Skills',
        description:
          'Problem Solving, Teamwork, Adaptability, Time Management, Communication, Research, Critical Thinking'
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              destinationDir: `static/blog`,
              ignoreFileExtensions: [],
            },
          },
          {
            resolve: `gatsby-remark-katex`,
            options: {
              strict: `ignore`,
              trust: true,
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Nezar Portfolio`,
        short_name: `Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
