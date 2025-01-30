# Projekt Javascript - Implementacja WASM
## Cel projektu
Celem projektu jest użycie połączenia języka Javascript z programem skompilowanym do formatu Web Assembly w celu wyświetlenia prostej demonstracyjnej "gry komputerowej" wewnątrz strony internetowej. \
Program demonstracyjny będzie napisany w języku Rust w oparciu o silnik Bevy.

Program jest podzielony na dwa repozytoria - repozytorium główne (obecne) zawiera opis zarysu projektu, drugie repozytorium zawiera informacje tylko na temat programu demonstracyjnego gry. Jest ono dostępne pod adresem 
https://github.com/apuniacct/js_proj_game

## Instalacja i uruchamianie
### Wymagane oprogramowanie
`npm`
### Uruchamianie
Aby uruchomić projekt należy:
1) Pobrać obecne repozytorium
2) Przygotować repozytorium gry
3) Skompilować program gry zgodnie z instrukcjami zawartymi w jej repozytorium
4) Zamieścić uzyskane pliki .wasm i .js w folderze (obecny projekt)/static/game pod nazwami "game.js" i "game.wasm"
5) Wejść do folderu projektu i uruchomić komendę `npm install` w celu pobrania brakujących paczek
6) komenda `npm run DevStart` uruchamia serwer i wypisuje odpowiedni port
7) Wejście na stronę localhost:PORT powinno pokazać grę testową działającą w oknie przeglądarki

## Opis implementacji
### Zarys backendu/frontendu
#### Backend
- Node.js (Express)
- Potencjalne przeniesienie na dockera
#### Frontend
- Prosta strona z html + css + js
### Funkcjonalności
| Kluczowe | Opcjonalne
| - | - |
| Napisanie prostego demo i skompilowanie go do WASM | Napisanie bardziej dogłębnego programu
| Użycie tylko WebGL *lub* WebGPU2 | Jednoczesne wsparcie dla WebGL *i* WebGPU2, wybór za pomocą argumentów lub endpointów
| Implementacja ładowania programu WASM | Napisanie demo używającego opcjonalnych argumentów do zmiany ustawień
### Endpointy
| Funkcja | Endpoint |
| - | - |
| Gra renderowana przy użyciu WebGL | /game/webgl |
| Gra renderowana przy użyciu WebGPU2 | /game/wgpu |


## Postęp projektu
### Commit 1
- Program testowy gry silnika Bevy działa w środowisku testowym po skompilowaniu do WASM z backendem graficznym WebGL2
- Implementacja ruchu za pomocą odgórnie wpisanych klawiszy przy użyciu impulsów fizycznych, oparta na silniku fizycznym bevy_avian
- Prosta wizualizacja prędkości wypadkowej gracza i obliczonego przyspieszenia
- Backend/frontend niezbudowany, program uruchamia się w minimalnym środowisku serwera wasm-server-runner

### Commit 2
-
