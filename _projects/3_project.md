---
layout: page
title: Skin Lesion Detector
description: A multi-architecture skin lesion classification pipeline with GPU training infrastructure
img: assets/img/sld-confusion-matrix.png
importance: 4
category: work
---

**Skin Lesion Detector** is a medical AI initiative I've been leading as part of **CSES Innovate** at UC San Diego — a 9-member team building an end-to-end pipeline for classifying dermoscopic images of skin lesions, from dataset preprocessing through model training to deployment infrastructure.

---

## 🔹 Motivation

Skin cancer is one of the most common cancers worldwide, and early detection through lesion classification can meaningfully improve patient outcomes. The project started from [this paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC11295341/) on from-scratch CNN pipelines for multi-class skin lesion classification on the **HAM10000** dataset, and has since evolved into a broader comparison of architectures with real training infrastructure behind it.

---

## 🔹 Dataset Pipeline

- Images organized by lesion type (`bkl`, `mel`, `df`, etc.), resized to 256×256 and normalized with dataset-specific per-channel mean/std computed via OpenCV.
- Balanced each class to a minimum sample count via on-the-fly augmentation (rotation, flips, brightness jitter, random crops) rather than storing augmented copies to disk — new augmented samples are generated per epoch, keeping storage flat while increasing training diversity.
- Stratified 60/20/20 train/val/test split, with the test set kept unaugmented throughout.

---

## 🔹 Model Architectures

The project evolved through several architectures rather than settling on the original from-scratch CNN plan:

- **Custom CNN** — the original from-scratch PyTorch CNN (4 conv blocks + FC layers) matching the reference paper's configuration.
- **Transfer learning** — EfficientNet-B0 and ResNet18, selectable at training time, trained with label smoothing and mixed-precision.
- **YOLOv8s classification** — the most recent and furthest-trained approach, fine-tuned on the HAM10000 7-class task.

**Results (YOLOv8s, 50 epochs):** 81.75% top-1 accuracy and 99.84% top-5 accuracy on the held-out test set, with per-class classification reports and a confusion matrix (above) generated for error analysis.

---

## 🔹 Training Infrastructure

- **Docker**: CUDA 12.1 image with PyTorch and Ultralytics for GPU training.
- **Kubernetes**: batch training jobs on A100 GPU nodes, with persistent volumes for dataset and checkpoint storage, plus interactive pods for debugging.
- Multi-GPU `DataParallel` support, a memory-efficient `--test-only` evaluation mode, and early stopping with learning-rate scheduling.

---

## 🔹 Next Steps

- Push accuracy further via targeted augmentation and class-balancing on the lesion types the confusion matrix shows are hardest to separate.
- Wire up a lightweight inference API so the existing Flutter/Firebase mobile UI can call the trained model directly.
- Continue benchmarking YOLOv8 against the transfer-learning baselines to settle on a final production model.
