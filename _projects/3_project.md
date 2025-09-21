# Skin Lesion Classification with Custom CNN

## 🔹 Motivation
- Skin cancer is one of the most common cancers worldwide, and early detection through lesion classification can significantly improve patient outcomes.  
- Inspired by [this paper](https://pmc.ncbi.nlm.nih.gov/articles/PMC11295341/), I implemented a **from-scratch CNN pipeline** for multi-class skin lesion classification.  
- The focus is on **building the dataset pipeline and model training loop from scratch in PyTorch**, instead of relying on pre-trained networks like ResNet.  

---

## 🔹 Dataset Preparation
- Collected **skin lesion images** organized by lesion type (`bkl`, `mel`, `df`, etc.).  
- **Preprocessing pipeline**:
  - Resized all images to **256 × 256** with OpenCV.  
  - Computed **per-channel mean and standard deviation** of the dataset.  
  - Normalized images **on-the-fly** using PyTorch transforms.  
- **Balanced Dataset Creation**:
  - Ensured each lesion class has **at least 6000 images**.  
  - For underrepresented classes, applied **on-the-fly augmentation** (rotation, flips, brightness shifts, random crops, etc.).  
  - Stratified split into **train (60%) / val (20%) / test (20%)**, maintaining class balance.  
  - Ensured **test set is never augmented**, preserving original images.  
- Added **progress tracking** with `tqdm` to monitor dataset balancing and splitting.  

---

## 🔹 Data Augmentation
- Implemented augmentation in **PyTorch `transforms`**:  
  - Random rotations, flips, resized crops, brightness jitter.  
  - Normalization with dataset-specific mean & std.  
- Training pipeline ensures **new augmented samples are generated per epoch**, instead of permanently storing augmented images (saves storage and improves diversity).  

---

## 🔹 Model Architecture
- Built a **custom CNN in PyTorch** that matches the paper’s exact layer configuration:  
  - **4 Convolutional blocks** with `Conv2D + MaxPool + ReLU`.  
  - **Flatten → Fully Connected Layers (512 → 64 → 32 → 7)**.  
  - Dropout (0.5) for regularization.  
- Parameter counts were carefully matched to the paper’s specifications.  
- Final output: **7 classes** (skin lesion categories).  

---

## 🔹 Git & Workflow Management
- Used `.gitignore` to exclude **all image files and `venv/`** from Git commits.  
- Resolved issue of accidentally committing a **676 MB `core` file** that exceeded GitHub’s 100 MB limit.  
- Plan to clean up history (using **BFG Repo Cleaner**) to fully remove large files from Git.  

---

## 🔹 Next Steps
1. **Training & Evaluation**
   - Train the CNN on the balanced dataset.  
   - Monitor training with metrics like accuracy, F1-score, confusion matrix.  
   - Compare performance with baseline models (e.g., ResNet, MobileNet).  

2. **Optimization**
   - Experiment with learning rate schedules and optimizers.  
   - Apply **early stopping** and **checkpoint saving** for best model selection.  

3. **Deployment**
   - Save trained model as `.pth`.  
   - Build a **Flask/Streamlit demo app** where users can upload an image and get predicted lesion class.  

4. **Portfolio Presentation**
   - Visualize dataset distribution before/after augmentation.  
   - Show training curves (loss/accuracy).  
   - Include architecture diagram and key code snippets.  
   - Link to GitHub repo with clean README.  