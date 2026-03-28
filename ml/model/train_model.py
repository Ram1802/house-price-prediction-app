#train_model
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import r2_score
import joblib

# Load dataset
df = pd.read_csv("data.txt")

# Remove spaces from column names
df.columns = df.columns.str.strip()

# Preprocessing
df = df.dropna()

print("Columns:", df.columns.tolist())

X = df[["area", "bedrooms", "bathrooms", "location_score", "age_of_house"]]
y = df["price"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Linear Regression
lr = LinearRegression()
lr.fit(X_train, y_train)
lr_pred = lr.predict(X_test)
lr_score = r2_score(y_test, lr_pred)

# Random Forest
rf = RandomForestRegressor(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)
rf_pred = rf.predict(X_test)
rf_score = r2_score(y_test, rf_pred)

# Save best model
best_model = rf if rf_score > lr_score else lr
joblib.dump(best_model, "model.pkl")

print("Model trained successfully!")
print("Linear Regression R2 Score:", lr_score)
print("Random Forest R2 Score:", rf_score)
