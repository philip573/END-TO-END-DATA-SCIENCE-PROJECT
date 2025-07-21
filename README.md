# END-TO-END-DATA-SCIENCE-PROJECT

COMPANY NAME: CODTECH IT SOLUTIONS

NAME: STALLAN N PHILOS

INTER ID:CT08DL10

DOMAIN: DATA SCIENCE

DURATION: 8 WEEKS

MENTOR: NEELA SANTHOSH

# Customer Churn Prediction - Internship Project (Task 3)

This repository contains a complete end-to-end machine learning pipeline to predict customer churn. This task was assigned during my internship at CODTECH, focusing on building a robust data science project from data preprocessing to model deployment readiness.

---

## 🎯 Objective

To build a machine learning model that predicts whether a customer is likely to churn (leave) based on their demographic and behavioral data. The goal is to help businesses retain customers and improve decision-making.

---

## 📁 Dataset

The dataset contains various customer attributes such as:

- Gender, Age, Income, and Location
- Subscription type
- Usage behavior
- Customer support interactions
- Target variable: `Churn` (0 = No, 1 = Yes)

---

## 🔄 Project Workflow

### 1. **Data Loading & Inspection**
- Loaded data using `pandas`
- Inspected structure, types, and missing values

### 2. **Data Cleaning**
- Handled missing values
- Removed duplicates (if any)
- Converted categorical variables using Label Encoding / One-Hot Encoding

### 3. **Feature Engineering**
- Scaled numerical columns using `StandardScaler`
- Removed irrelevant features (e.g., customer IDs)

### 4. **Exploratory Data Analysis (EDA)**
- Visualized churn distribution
- Analyzed customer segments with higher churn
- Created plots to understand feature influence

### 5. **Train-Test Split**
- Used `train_test_split` with `stratify` on target to maintain balance

### 6. **Model Training**
- Used multiple classifiers:
  - Logistic Regression
  - Random Forest
  - XGBoost
- Evaluated using Accuracy, Precision, Recall, F1 Score

### 7. **Model Improvement**
- Applied SMOTE to address class imbalance
- Performed hyperparameter tuning using `GridSearchCV`

### 8. **Model Evaluation**
- Final model chosen based on F1-Score and balanced recall
- Evaluated using confusion matrix and classification report

---

## 📊 Results

| Model              | Accuracy | Precision | Recall | F1-Score |
|--------------------|----------|-----------|--------|----------|
| Logistic Regression| 0.81     | 0.78      | 0.74   | 0.76     |
| Random Forest      | 0.86     | 0.82      | 0.81   | 0.81     |
| **XGBoost (Best)** | 0.88     | 0.85      | 0.83   | **0.84** |

---

## 🛠️ Tools & Libraries

- Python
- Pandas, NumPy
- Matplotlib, Seaborn
- Scikit-learn
- Imbalanced-learn (SMOTE)
- XGBoost

---

## 📦 Folder Structure

customer-churn-prediction/
│
├── data/
│ └── churn_data.csv
├── Churn_Prediction_Project.ipynb
├── README.md
└── best_model.pkl # (Optional saved model)

---

## 💡 Key Learnings

- Importance of EDA in understanding patterns
- Addressing class imbalance using SMOTE
- Hyperparameter tuning for model optimization
- Threshold tuning and precision-recall trade-off

---

## 📥 How to Run

1. Clone this repository
2. Install dependencies:
pip install -r requirements.txt
3. Launch the notebook:
jupyter notebook Churn_Prediction_Project.ipynb:

---

## 📌 Deliverables

- Cleaned dataset
- Final trained model
- Performance evaluation metrics
- Final visualizations
- Project report (if needed)



