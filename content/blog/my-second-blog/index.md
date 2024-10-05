---
title: Enhancing Execution Speed of White Noise Generation through Parallelization and Vectorization
date: '2024-04-11T12:00:00.00Z'
description: 'Accelerated FFT processing of white noise by leveraging OpenMP parallelization and AVX2 vectorization, significantly improving execution speed.'
---
# Enhancing Execution Speed of White Noise Generation through Parallelization and Vectorization

## Introduction

In modern computational tasks, white noise generation and processing are fundamental in various fields, from signal processing to cryptography. The process typically involves generating random noise, transforming it into the frequency domain using the Fast Fourier Transform (FFT), modifying the noise, and converting it back using the Inverse FFT (iFFT). However, such processes, especially when dealing with large datasets, can be computationally expensive and time-consuming.

This article presents a study aimed at optimizing the execution time of white noise generation and FFT processing through the use of **parallelization** with OpenMP and **vectorization** with AVX2 instructions. The goal is to significantly reduce the computational load and improve performance. The following sections outline the problem statement, approach, and the resulting improvements from our optimization techniques.

---

## Problem Statement

White noise generation and FFT operations involve significant computational effort, especially when processing large datasets like $2^{26}$ data points. In its raw form, white noise is inaudible but becomes more discernible after FFT and iFFT transformations. In applications that require real-time processing or frequent iterations over such large datasets, reducing the execution time is critical for performance.

The initial version of the sequential code took approximately 70 seconds to execute, which was not practical for high-performance needs. The goal of this study was to identify computational bottlenecks, apply parallelization and vectorization techniques, and achieve substantial improvements in execution time.

---

## Approach

We adopted a two-fold approach to optimize the execution time:

### 1. Parallelization with OpenMP
We identified key sections of the code for parallelization, primarily focusing on white noise generation, FFT calculations, and normalization.
- Using OpenMP directives, we distributed these tasks across multiple threads to exploit multi-core processors.
- For instance, the `#pragma omp parallel for` directive was applied to parallelize loops, and `#pragma omp task` was used for concurrent FFT operations, ensuring that independent tasks could be processed simultaneously.

### 2. Vectorization with AVX2
We utilized AVX2 intrinsics to vectorize the FFT-related calculations, allowing the CPU to perform operations on multiple data points in a single instruction cycle.
- The `FFT_rec()` function and complex number multiplication operations were vectorized to handle 256-bit wide registers (i.e., four double-precision floating-point numbers at once), leading to significant speedups in the computational heavy parts of the code.

### 3. Combining Parallelization and Vectorization
The final optimized code combined both parallelization and vectorization, ensuring that multi-core and SIMD (Single Instruction, Multiple Data) optimizations were used in harmony to maximize performance.

---

## Results

The results of the optimizations were promising. The execution time of the original sequential code was reduced from 70 seconds to 10 seconds using a combination of OpenMP parallelization and AVX2 vectorization. The following performance improvements were achieved:

- **Parallelization with OpenMP**: Reduced execution time from 70 seconds to 15 seconds, achieving a **4.67x speedup**.
- **Vectorization**: Reduced execution time to 13.1 seconds, providing a **5.34x speedup**.
- **Combined Parallelization and Vectorization**: Achieved the best performance, reducing the execution time to 10 seconds, yielding a **7x speedup**.

These results highlight the effectiveness of applying both parallelization and vectorization techniques to reduce computational overhead in FFT-based white noise processing.

---

## Conclusion

This study demonstrated how computational efficiency can be significantly improved through strategic parallelization and vectorization. By employing OpenMP and AVX2, we achieved a 7x improvement in execution time, making FFT-based white noise generation and processing more practical for high-performance applications.

If you're interested in exploring the full methodology and detailed results, you can download the complete paper [here](./paper.pdf).
