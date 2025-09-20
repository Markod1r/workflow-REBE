# Workflow Use Case: AI Learning Insight

## 1. Frontend (React + Tailwind + Vite + Redux + Immer)
- User login → melihat dashboard progress.
- Data state disimpan di Redux (Immer untuk update state immutable).
- Frontend melakukan request ke backend:
  - `GET /progress/{userId}` → ambil data progres belajar.
  - `POST /predict/insight` → kirim data progres untuk dapat rekomendasi AI.
- Hasil dari backend ditampilkan di UI (grafik, rekomendasi modul, insight).

## 2. Backend (Hapi.js)
- Menyediakan REST API untuk frontend:
  - `GET /progress/{userId}`
  - `POST /predict/insight`
- Mengambil data dari database.
- Memanggil model Machine Learning dan mengembalikan hasil ke frontend.

## 3. Machine Learning Layer
- **Input:** data progres belajar user (aktivitas, nilai, kecepatan belajar).
- **Proses:** model ML melakukan prediksi/rekomendasi (klasifikasi/regresi/clustering).
- **Output:** insight/rekomendasi modul belajar → dikembalikan dalam bentuk JSON.

## 4. Alur End-to-End
1. User buka dashboard → frontend ambil data progres dari backend.
2. User klik **“Minta Insight”** → frontend kirim data ke backend.
3. Backend → proses data, panggil model ML.
4. Model ML → hasil prediksi dikembalikan ke backend.
5. Backend → kirim hasil ke frontend.
6. Frontend → update state Redux → tampilkan insight adaptif (grafik & rekomendasi).

---
