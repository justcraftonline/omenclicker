# 🖱️ OmenClicker

**OmenClicker** to nowoczesna, lekka aplikacja narzędziowa dla systemu Windows, wyposażona w intuicyjny interfejs graficzny w ciemnym motywie opartym o **CustomTkinter**.

---

## 🌟 Główne Funkcje

- ⚔️ **Moduł Combat (Autoclicker):**
  - Nie zależne konfigurowanie dla **Lewego** i **Prawego** przycisku myszy.
  - Regulacja liczby kliknięć na sekundę (CPS: 0.5 – 30).
  - Tryby działania: `toggle` (przełącznik) oraz `hold` (aktywny podczas trzymania klawisza).
  - **Auto Garda:** Automatyczny blok prawym przyciskiem myszy w trakcie lewego klikania z regulacją opóźnienia.

- ⌨️ **Bindy i Automatyzacja:**
  - Dowolne przypisywanie skrótów klawiszowych (klawisze literowe, cyfry, F1–F12).
  - **Auto Snowball:** Automatyczne wyrzucenie śnieżki/przedmiotu (przełączenie slotu $\rightarrow$ prawy klik $\rightarrow$ powrót do miecza).
  - 🚨 **F12 – Awaryjny Wyłącznik (Emergency Stop):** Natychmiastowe wyłączenie wszystkich aktywnych pętli oraz puszczenie przycisków myszy/klawiatury.

- ⛏️ **Moduł Kopania (Mining Macro):**
  - Automatyczne poruszanie się po obszarze (pętla z obsługą ruchów `W/A/S/D`).
  - Ustawienia długości, szerokości oraz czasu na blok.
  - Automatyczne wykonywanie komend na czacie co wyznaczoną ilość okrążeń (np. `/sell all`).

- 🎯 **Filtrowanie Okna Docelowego:**
  - Opcja blokady klikania – aplikacja wykonuje akcje **wyłącznie wtedy**, gdy wybrane okno jest aktywne na pierwszym planie.

- 🎨 **Nowoczesne GUI:**
  - Ciemny motyw w kolorystyce ciemno-czerwonej.
  - Pasek boczny z płynną nawigacją.
  - Wsparcie dla bezramkowego okna widocznego na pasku zadań Windows.

---

## 🚀 Wymagania

- **System operacyjny:** Windows 10 / 11
- **Python:** 3.10 lub nowszy (zalecany Python 3.14)

---

## 🛠️ Instalacja i Uruchomienie (Wersja Deweloperska)

1. **Sklonuj repozytorium lub pobierz pliki projektu.**
2. **Utwórz i aktywuj środowisko wirtualne:**
   ```cmd
   python -m venv .venv
   call .venv\Scripts\activate.bat
