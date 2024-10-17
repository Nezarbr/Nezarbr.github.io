module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://nezar_boujida.github.io/`,
    // Your Name
    name: 'Nezar Boujida',
    // Main Site Title
    title: `Nezar Boujida | Data Scientist`,

    // Optional: Github account URL
    github: `https://github.com/Nezarbr`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/nezar-boujida/`,
    // Content of the About Me section
    about: `Hello, I'm Nezar. I'm currently studying Applied Mathematics and Computer Science at Sorbonne University, where I dive into data science, explore datasets, and uncover meaningful patterns to solve real-world problems. I've gained experience as a Data Scientist intern at Datategy and Hiflow, and now I'm working as an Applied Scientist at Launchmetrics. In my free time, I enjoy long-distance running, traveling, and discovering new places, always seeking out new challenges to grow and learn.`,

    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'Optimizing Automotive Logistics Enhancing Efficiency in Vehicle Transportation Services',
        description:
          'Developed a system to rank and select drivers efficiently, doubling engagement and reducing operational costs by up to 20%, enabling scalable growth in vehicle transfer operations.',
      },
      {
      name: "Traffic Modeling and Forecasting Using Sensor Data in Paris",
        description:
          ' Analyzed traffic patterns from 3,500 sensors in Paris to identify congestion trends and relationships between vehicle flow and road occupancy, with plans to build forecasting models and account for geographical dependencies.',
      },
      {
        name: "Parallelization Strategies for Numerical Simulation of Heat Transfer in CPU Heatsinks",
          description:
            'Conducted a parallelized numerical simulation of heatsink dynamics in AMD EPYC CPUs, leveraging fine mesh grids to improve thermal modeling accuracy while reducing computation time.',
        },
      {
        name: 'Enhancing Execution Speed of White Noise Generation through Parallelization and Vectorization',
        description:
          'Accelerated FFT processing of white noise by leveraging OpenMP parallelization and AVX2 vectorization, significantly improving execution speed.',
      },
      {
        name: "Ride-Hailing Trends in New York City: Uber, Lyft, and Via Operations Analysis",
        description:
          'Analyzed fare pricing, demand patterns, and borough-specific dynamics of Uber, Lyft, and Via in NYC using trip data from January to May 2021, uncovering insights into the competitive landscape and operational challenges.',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Launchmetrics',
        description: 'Applied Scientist Intern, June 2024 - Present',
        link: 'https://www.launchmetrics.com/fr',
      },
      {
        name: 'Hiflow',
        description: 'Data Scientist Intern, September 2023 - March 2024',
        link: 'https://www.hiflow.com/fr-fr',
      },
      {
        name: 'Datategy',
        description: 'Data Scientist Intern, June 2023 - August 2024',
        link: 'https://www.datategy.net/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Programming Languages',
        description:
          'Python, R, C, C++, SQL.',
      },
      {
        name: 'Data Science and Machine Learning',
        description: 'Time Series Analysis, Predictive Modeling, Feature Engineering, Neural networks, Statistical Analysis. ( Scikit-learn, PyTorch)',
      },
      {
        name: 'Data Engineering',
        description: 'ETL Processes, Data Quality Checks, Workflow Automation, Performance Optimization (PySpark, Databricks, Delta Lake, Poetry, soda, Pytest)',
      },
      {
        name: 'Data Visualization and Dashboards:',
        description: 'Plotly, Dash, Seaborn, Matplotlib, Folium, Superset, Metabase',
      },
      {
        name: 'Soft Skills',
        description:
          'Problem Solving, Teamwork, Adaptability, Time Management, Communication, Research, Critical Thinking',
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
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};