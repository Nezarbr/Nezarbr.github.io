const path = require('path');

module.exports = {
  siteMetadata: {
    siteUrl: `https://nezarbr.github.io/`,
    name: 'Nezar Boujida',
    title: `Nezar Boujida | Data Scientist`,
    description: `Data Scientist · Machine Learning, Statistics & NLP`,
    author: 'Nezar Boujida',
    github: `https://github.com/Nezarbr`,
    linkedin: `https://www.linkedin.com/in/nezar-boujida/`,
    about: `
        I’m Nezar, a data scientist based in Paris and available remotely, with an engineering degree in Applied Mathematics and Computer Science from Polytech Sorbonne.
        I work across luxury & fashion analytics, healthcare and logistics, building classification, forecasting, recommendation and fraud-detection models, as well as NLP and LLM systems, from exploration to production. What interests me most is evaluation: knowing how well a model really performs before anyone relies on it, and having the statistics to back it up.
        In my free time, I enjoy long-distance running, traveling, and discovering new places, always on the lookout for fresh challenges to learn and grow.
    `,
    projects: [
      {
        name: "XGBoost for Ultra-Imbalanced Fraud Detection",
        description:
          "Ranks 587,299 anonymized card transactions by fraud risk for a manual review queue, at 0.24% fraud prevalence. Temporal, geographic and K-means currency risk-bucket features; surfaces fraud 167x better than chance (Average Precision 0.672 against a 0.0040 prevalence baseline) on a chronologically held-out December.",
        link: "/blog/fraud-detection-xgboost-imbalanced-data/"
      },
      {
        name: "Derivation of Cochran's Formula for Sample Size Determination",
        description:
          "Derived Cochran’s formula by inverting the margin-of-error equation—leveraging the Central Limit Theorem to compute required sample sizes for means and proportions at a given confidence level.",
        link: "/blog/cochran-sample-size-formula/"
      },
      {
        name: "DeepOCT: Clinical Decision Support for Diabetic Macular Edema",
        description:
          "Built for the Faculty of Medicine and Pharmacy (CHU Ibn Sina), Rabat. OCT macular scans are denoised, then a self-hosted Qwen2-VL-72B extracts 8 biomarkers and a GPT-4o layer turns them into a diagnostic synthesis, treatment plan and anatomo-visual prognosis. Validated against two expert ophthalmologists on 100 annotated eyes, reaching 91.7% weighted F1 on biomarker detection and 87% overall agreement with expert reading. The two biomarkers the model under-identified were deliberately left editable by the clinician rather than auto-applied. A study prototype, not a deployed clinical tool.",
        link: "#"
      },
      {
        name: "Ride-Hailing Trends in New York City: Uber, Lyft, and Via Operations Analysis",
        description:
          'Analyzed fare pricing, demand patterns, and borough-specific dynamics of Uber, Lyft, and Via in NYC using trip data from January to May 2021, uncovering insights into the competitive landscape and operational challenges.',
        link: '/blog/nyc-ride-hailing-analysis/'
      },
      {
        name: "RAG Question-Answering on Natural Questions",
        description:
          "Open-domain QA over a self-built 19k-page / 469k-chunk Wikipedia corpus, cleaned by a 9-rule extraction pipeline that strips 51% of the raw text as boilerplate without ever cutting an answer span. Fine-tuned a 22M-parameter cross-encoder reranker on hard negatives mined by the retriever, lifting passage recall@5 from 69.1% to 81.1% and recall@10 from 79.8% to 88.6% on a held-out 1,626-question split, stratified by question type and grouped by page. Answers located inside tables are excluded, so the figures are not comparable to published NQ-Open numbers.",
        link: "https://github.com/Nezarbr/natural-questions-rag"
      },
      {
        name: "Traffic Modeling and Forecasting Using Sensor Data in Paris",
        description:
          'Analyzed traffic patterns from 3,500 sensors in Paris to identify congestion trends and relationships between vehicle flow and road occupancy, with plans to build forecasting models and account for geographical dependencies.',
        link: '#'
      },
      // DEACTIVATED 2026-10-30 at Nezar's request -- hidden from the site, not deleted.
      // This is the Hiflow two-tower recommender entry. Un-comment to restore.
      // {
      //   name: 'Optimizing Automotive Logistics: Enhancing Efficiency in Vehicle Transportation Services',
      //   description:
      //     'Built and evaluated a two-tower recommender as an alternative to manual driver selection, shortlisting ~100 candidates per transport request from a 3,400-driver pool. Diagnosed attendance and regional bias as the cause of poor recommendation coverage (20% of drivers held 77% of historical requests), lifting the share of the pool surfaced from 9% to 40%.',
      //   link: '/blog/my-fourth-blog/'
      // },
      // DEACTIVATED 2026-11-08 (Data Scientist repositioning) -- HPC projects hidden, not deleted. Un-comment to restore.
      // {
      //   name: "Parallelization Strategies for Numerical Simulation of Heat Transfer in CPU Heatsinks",
      //   description:
      //     'Conducted a parallelized numerical simulation of heatsink dynamics in AMD EPYC CPUs, leveraging fine mesh grids to improve thermal modeling accuracy while reducing computation time.',
      //   link: '/blog/my-first-blog/'
      // },
      // {
      //   name: 'Enhancing Execution Speed of White Noise Generation through Parallelization and Vectorization',
      //   description:
      //     'Accelerated FFT processing of white noise by leveraging OpenMP parallelization and AVX2 vectorization, significantly improving execution speed.',
      //   link: '/blog/my-second-blog/'
      // },
    ],
    experience: [
      {
        name: 'Launchmetrics',
        description: 'Data Scientist, June 2024 - Present',
        link: 'https://www.launchmetrics.com/fr'
      },
      {
        name: 'Faculty of Medicine and Pharmacy (CHU Ibn Sina), Rabat',
        description: 'Freelance Data Scientist (part-time), June 2024 - March 2025',
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
        name: 'Machine Learning',
        description:
          'Classification, regression, clustering (k-means), time-series forecasting, recommender systems, fraud detection and risk scoring, imbalanced learning, deep learning, computer vision, scikit-learn, XGBoost, PyTorch'
      },
      {
        name: 'Statistics and Evaluation',
        description:
          'Statistical inference, confidence intervals, sample-size analysis, hypothesis testing, A/B testing, model evaluation, inter-annotator agreement'
      },
      {
        name: 'Data and SQL',
        description:
          'Python, SQL, pandas, PySpark, Databricks, Delta Lake, BigQuery, batch ETL'
      },
      {
        name: 'NLP and LLMs',
        description:
          'Text classification, LLM evaluation, LLM-as-judge, prompt optimisation, LLM agents, RAG, embeddings and vector search, Hugging Face Transformers, LangChain'
      },
      {
        name: 'Data Visualization and BI',
        description:
          'Tableau, Apache Superset, Metabase, Plotly, Dash, Seaborn, Matplotlib, Folium'
      },
      {
        name: 'MLOps and Tools',
        description:
          'MLflow, Git, Docker, CI/CD with GitHub Actions, AWS'
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
