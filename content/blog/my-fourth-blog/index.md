---
title: Optimizing Automotive Logistics Enhancing Efficiency in Vehicle Transportation Services
date: '2024-04-11T12:00:00.00Z'
---

## Introduction
In the rapidly evolving world of vehicle transportation, logistics services face increasing pressure to efficiently move vehicles across diverse destinations. These services, crucial to keeping automotive supply chains running smoothly, rely on a unique workforce—independent drivers who, although not full-time employees, are essential to the system’s operation. But what happens when these drivers become scarce or inefficiencies emerge in matching the right driver to the right transport?

For many in this field, manually assigning drivers to vehicle transfers has become a daily struggle. The challenge? Finding the perfect driver for each job while minimizing delays, costs, and manual interventions. Yet, with the growing complexity of logistics demands, old methods are proving insufficient.

---

## Problem Statement

Consider the platform where customers post vehicle transfer requests, waiting for drivers to step up and apply. Ideally, it should run smoothly: customer posts a request, driver picks it up, and the vehicle gets moved on time. But reality doesn’t always follow that script. When transfer deadlines loom without a driver assigned, service operators must step in manually—a process that drains time and resources.

Two central issues have emerged from this model:

- **A Narrow Driver Pool**: The focus on high-precision driver selection has inadvertently reduced the available pool of drivers, limiting flexibility and giving a small group too much leverage. This not only increases costs but also makes the entire system fragile when drivers are unavailable.
  
- **Manual Processes**: As deadlines approach, if no driver has been assigned, teams must manually match drivers to requests—an approach that doesn’t scale well, leading to inefficiency.

These challenges called for an innovative solution—one that could optimize both the efficiency of driver matching and the cost-effectiveness of the system.

---

## The Solution: A Two-Tower Recommender System

To address these problems, we developed a **two-tower recommender system**, designed to transform the way drivers are matched to transfer requests. This system evaluates drivers’ suitability for specific transfers, narrowing the search space to just 100 top-ranked drivers—representing only 2% of the total driver pool. Impressively, the system ranks unsuitable drivers beyond the top 100 in 93% of cases, ensuring precision without sacrificing speed.


---

**Expected Outcomes**:

- **Increased Engagement**: Based on the model tests, we anticipate a significant boost in driver engagement, with up to 40% of drivers interacting with the system—doubling the engagement rate compared to the previous system's 20%.
  
- **Cost Efficiency**: The model also predicts notable cost savings. By expanding the driver pool and fostering competition, operational costs are expected to drop by as much as 19%, a slight improvement over the previously estimated 18% reduction.


---

<div style="display: flex; justify-content: space-between;">
  <div style="flex: 1; text-align: center; margin-right: 10px;">
    <h4>Driver's Diversity vs. Number of Transfers</h4>
    <img src="./compar.png" alt="Driver's Diversity vs. Number of Transfers" style="max-width: 100%;">
  </div>
  <div style="flex: 1; text-align: center;">
    <h4>Price Variation: Booking vs. Minimum (%)</h4>
    <img src="./offic_margin.png" alt="Price Variation Analysis" style="max-width: 100%;">
  </div>
</div>

---

## How It Works

At the heart of this solution lies the two-tower architecture:

- **The Driver Tower** processes driver attributes, converting them into high-dimensional embeddings that encapsulate their preferences and past performance.
  
- **The Request Tower** analyzes the specific details of each transfer request—such as pickup and drop-off locations—and similarly generates embeddings that represent the nature of the request.

These two towers work in harmony, calculating the cosine similarity between driver and request embeddings, effectively ranking drivers based on their fit for each transfer. This automated matching process dramatically reduces the need for manual interventions and mitigates the risk of last-minute price surges.

---


Want to explore the details of this system further? [Download the full paper here](./paper.pdf).