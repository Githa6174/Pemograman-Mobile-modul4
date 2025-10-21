# Modul 4: Implementasi React Navigation (Tab Navigation)

Ini adalah proyek untuk Modul 4 mata kuliah Pemrograman Mobile, yang berfokus pada implementasi navigasi di aplikasi React Native menggunakan Expo.

Aplikasi ini mendemonstrasikan cara membuat Bottom Tab Navigation (navigasi tab di bawah) yang modern dan diberi *style* kustom.

## ✨ Fitur Utama

* **Tab Navigation Modern:** Dibangun menggunakan **React Navigation v6** (`@react-navigation/bottom-tabs`).
* **Tema Gelap Kustom:** Seluruh aplikasi (Tab bar, header, dan layar) memiliki *style* tema gelap (dark mode).
* **Ikon Aktif/Non-Aktif:** Ikon pada tab bar berubah tampilan secara dinamis saat dipilih.
* **Layar Kustom:**
    * **Layar Beranda:** Menampilkan komponen "Kartu" (Card) modern dengan tombol kustom.
    * **Layar Pengaturan:** Menampilkan daftar menu interaktif dengan ikon dan komponen `Switch`.

## 🚀 Tantangan Teknis: Inkompatibilitas Versi

Tugas awal modul ini mengharuskan penggunaan `react-navigation@2.18.2` (versi 2). Namun, *library* ini sudah usang dan **tidak kompatibel** dengan Expo SDK modern (SDK 50+).

Proyek ini gagal berjalan dengan `v2` karena *error native* (seperti `measureInWindow' of undefined`).

Oleh karena itu, proyek ini diimplementasikan ulang menggunakan **React Navigation v6** untuk memenuhi tujuan fungsionalitas tugas dengan teknologi yang stabil dan didukung.

## 🛠️ Teknologi yang Digunakan

* React Native
* Expo (SDK 50+)
* React Navigation v6
* `@expo/vector-icons` (untuk ikon)

## ⚙️ Cara Menjalankan

1.  **Clone repositori ini:**
    ```bash
    git clone [https://github.com/username/nama-repo.git](https://github.com/username/nama-repo.git)
    cd nama-repo
    ```

2.  **Instal dependensi:**
    ```bash
    npm install
    # ATAU
    yarn install
    ```

3.  **Jalankan aplikasi:**
    ```bash
    npm start
    # ATAU
    yarn start
    ```

4.  Scan QR code menggunakan aplikasi **Expo Go** di perangkat Android atau iOS kamu.
