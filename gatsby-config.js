const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://nezarbr.github.io/`,
    name: 'Nezar Boujida',
    title: `Nezar Boujida | Data Scientist`,
    author: 'Nezar Boujida',
    github: `https://github.com/Nezarbr`,
    linkedin: `https://www.linkedin.com/in/nezar-boujida/`,
    about: `
        I’m Nezar, a Data Scientist in Paris working on LLM and NLP systems in production. I hold an engineering degree in Applied Mathematics and Computer Science from Polytech Sorbonne.
        I scope, build and own production LLM pipelines on Databricks and PySpark, evaluating models against hand-annotated benchmarks rather than spot-checks. Beyond that my work spans retrieval-augmented QA, fraud detection under extreme class imbalance, recommender systems, and time-series forecasting.
        In my free time, I enjoy long-distance running, traveling, and discovering new places, always on the lookout for fresh challenges to learn and grow.
    `,
    projects: [
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
        description: 'Data Scientist (CDI), September 2025 - Present',
        link: 'https://www.launchmetrics.com/fr'
      },
      {
        name: 'Launchmetrics',
        description: 'Data Scientist Intern, February 2025 - August 2025',
        link: 'https://www.launchmetrics.com/fr'
      },
      {
        name: 'Launchmetrics',
        description: 'Data Engineer Intern, June 2024 - January 2025',
        link: 'https://www.launchmetrics.com/fr'
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
        name: 'LLM and NLP',
        description:
          'LLM evaluation and benchmarking, RAG, fine-tuning (LoRA), prompt engineering, embeddings, text classification, topic modeling, NLI, Hugging Face Transformers'
      },
      {
        name: 'Data Science and Machine Learning',
        description:
          'Time Series Analysis, Predictive Modeling, Feature Engineering, Neural Networks, Statistical Analysis (Scikit-learn, PyTorch)'
      },
      {
        name: 'Data Engineering',
        description:
          'ETL Processes, Workflow Automation, Performance Optimization (PySpark, Databricks, Delta Lake, AWS, Poetry, soda, pytest)'
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
