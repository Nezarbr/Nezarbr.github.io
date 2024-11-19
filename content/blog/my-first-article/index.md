---
title: Maximum Likelihood and Loss Functions From Probability to Optimization
date: '2024-11-19T12:00:00.00Z'
description: 'Explore the connection between probability theory and optimization in machine learning. Learn how common loss functions like mean squared error and cross-entropy naturally emerge from Maximum Likelihood Estimation (MLE).'
---

<script type="text/javascript" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>

## Maximum Likelihood and Loss Functions: From Probability to Optimization

In machine learning, we often take loss functions for granted. Data scientists routinely use mean squared error for regression tasks and cross-entropy for classification problems, but have you ever wondered why these particular functions are chosen? Far from being arbitrary choices, these loss functions emerge naturally from fundamental principles of probability theory.

At the heart of this connection lies Maximum Likelihood Estimation (MLE), a powerful statistical principle that bridges the gap between probability theory and optimization. When we train a machine learning model by minimizing a loss function, we're often unknowingly performing maximum likelihood estimation under specific probabilistic assumptions about our data.

Understanding this connection is more than just theoretical elegance. It provides practitioners with:
- Insight into when standard loss functions are appropriate and when they might need modification
- A deeper understanding of model assumptions and limitations
- Tools for better model interpretation and debugging

In this article, we'll uncover how commonly used loss functions naturally arise from maximum likelihood estimation. We'll walk through the derivation of both linear regression's mean squared error and logistic regression's cross-entropy loss, showing how they emerge from simple probabilistic assumptions about the data generation process.

---

## Maximum Likelihood Estimation

### Concept

Maximum Likelihood Estimation (MLE) is a fundamental method for finding the parameters of a probability distribution that best explains observed data. The key idea is simple: given a known type of distribution (like normal, exponential, etc.), MLE finds the specific parameters of that distribution that make our observed data most probable.

Think of it as "reverse engineering" the parameters: we see the data, we know the type of distribution that generated it, and we want to find the exact parameters that were most likely used to generate that data.

### Mathematical Foundation

#### Basic Formula

Given independent observations \(x_1, x_2, \dots, x_n\) from a known distribution type, the likelihood function is:

\[
L(\theta) = P(x_1, x_2, \dots, x_n | \theta) = P(x_1 | \theta) \times P(x_2 | \theta) \times \dots \times P(x_n | \theta)
\]

where:
- \(\theta\) represents the parameters we want to estimate.
- The distribution type is known (e.g., normal, exponential).
- \(P(x_i | \theta)\) is the probability of observing \(x_i\) given parameters \(\theta\).

---

## From MLE to Loss Functions

When we maximize likelihood, we can equivalently minimize its negative logarithm. This transformation turns our probability maximization into a minimization problem:

\[
\arg\max_\theta L(\theta) = \arg\min_\theta -\log(L(\theta))
\]

---

## Linear Regression: Deriving Mean Squared Error from Maximum Likelihood

### Model Assumption:
- \(y = wx + b + \epsilon\), where \(\epsilon\) is the error term.
- \((y - wx - b)\) follows \(N(0, \sigma^2)\).
- This means our errors (residuals) follow a normal distribution.

### Probabilistic Interpretation:
For each residual \((y_i - wx_i - b)\):

\[
P(y_i - wx_i - b) = \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y_i - wx_i - b)^2}{2\sigma^2}\right)
\]

For \(n\) independent observations:

\[
L(w, b) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi\sigma^2}} \exp\left(-\frac{(y_i - wx_i - b)^2}{2\sigma^2}\right)
\]

Taking the negative logarithm:

\[
-\log(L) = \frac{n}{2} \log(2\pi\sigma^2) + \frac{1}{2\sigma^2} \sum (y_i - wx_i - b)^2
\]

Since constants (\(\frac{n}{2} \log(2\pi\sigma^2)\) and \(\frac{1}{2\sigma^2}\)) do not affect optimization:

\[
-\log(L) \propto \sum (y_i - wx_i - b)^2
\]

This is the mean squared error (MSE).

---

## Logistic Regression: Deriving Cross-Entropy Loss from Maximum Likelihood

### Model Assumption:
- Binary classification: \(y_i \in \{0,1\}\).
- \(P(y=1|x) = \sigma(wx + b)\), where \(\sigma(z) = \frac{1}{1 + e^{-z}}\).
- Outputs follow a Bernoulli distribution.

### Probabilistic Interpretation:
For each observation \((x_i, y_i)\):

\[
P(y_i | x_i) = \sigma(wx_i + b)^{y_i} (1 - \sigma(wx_i + b))^{1-y_i}
\]

For \(n\) independent observations:

\[
L(w, b) = \prod_{i=1}^{n} \sigma(wx_i + b)^{y_i} (1 - \sigma(wx_i + b))^{1-y_i}
\]

Taking the negative logarithm:

\[
-\log(L) = -\sum_{i=1}^{n} \left[ y_i \log(\sigma(wx_i + b)) + (1-y_i) \log(1 - \sigma(wx_i + b)) \right]
\]

This is the binary cross-entropy loss function.
