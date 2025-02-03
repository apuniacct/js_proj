# Projekt Javascript - Implementacja WASM
## Cel projektu
Celem projektu jest użycie połączenia języka Javascript z programem skompilowanym do formatu Web Assembly w celu wyświetlenia prostej demonstracyjnej "gry komputerowej" wewnątrz strony internetowej. \
Program demonstracyjny będzie napisany w języku Rust w oparciu o silnik [Bevy](https://bevyengine.org/).

Program jest podzielony na dwa repozytoria: 
- Repozytorium główne (obecne) zawiera opis zarysu projektu
- [drugie repozytorium](https://github.com/apuniacct/js_proj_game) zawiera program demonstracyjny gry.

## Instalacja i uruchamianie
### Wymagane oprogramowanie
`npm`
### Uruchamianie
Aby uruchomić projekt należy:
1) Przygotować repozytorium gry i skompilować ją zgodnie z instrukcjami
2) Pobrać repozytorium główne
3) Zamieścić uzyskane pliki .wasm i .js w folderze `public/game/` - plik z wygenerowanymi bindingami .js powinien mieć nazwę `game.js`, nazwa pliku wasm powinna zostać bez zmian (podstawowo `game_bg.wasm`).
4) Wejść do folderu projektu i uruchomić komendę `npm install` w celu pobrania brakujących paczek
5) komenda `npm run DevStart` uruchamia serwer (podstawowo na porcie 3000)
6) Wejście na stronę localhost:PORT powinno pokazać grę testową działającą w oknie przeglądarki

## Opis implementacji
### Zarys backendu/frontendu
#### Backend
- Node.js (Express)
- ~~Potencjalne przeniesienie na dockera~~
#### Frontend
- Prosta strona z ~~html~~ + css + js - html zastąpiony ejs renderowanym po stronie serwera
### Funkcjonalności
| Kluczowe | Opcjonalne
| - | - |
| Napisanie prostego demo i skompilowanie go do WASM  | ~~Napisanie bardziej dogłębnego programu~~ * 
| Użycie tylko WebGL *lub* WebGPU | Jednoczesne wsparcie dla WebGL *i* WebGPU, ~~wybór za pomocą argumentów lub endpointów~~ - Oba interfejsy działają**
| Implementacja ładowania programu WASM | ~~Napisanie demo używającego opcjonalnych argumentów do zmiany ustawień~~ - przekazywanie argumentów dla programów wasm jest nietrywialnym procesem

* Mimo braku dogłębnego programu testowego projekt był w stanie uruchomić znacznie bardziej rozbudowany program silnika Bevy.
** Użycie WebGPU wymaga kompilacji z dodatkową flagą silnika. Renderowanie WebGPU jest eksperymentalne w większości przeglądarek - włączenie wsparcia WebGPU może w tych wypadkach potencjalnie odsłonić luki w zabezpieczeniach.

### Endpointy
| Funkcja | Endpoint |
| - | - |
| Gra demonstracyjna | / |

## Dodatkowe informacje związane z zagadnieniami użycia wasm
- Z racji że cały kod związany z działaniem gry jest zawarty tylko w parze plików .js + .wasm, podmiana tej pary na wygenerowaną z innego programu pozwala na uruchomienie dowolnej gry, zakładając że nie wymaga ona niestandardowego sposobu inicjalizacji innego niż wywołanie funkcji `init()`.
- Środowisko wasm ogranicza programy uruchamiane do jednego wątka. Ograniczenie to można ominąć implementując wielowątkowość na poziome webworkerów JS, ale wymaga to przystosowania architektury programu w stopniu przewyższającym realistyczne modyfikacje do silnka gry; Funkcjonalnie program demonstracyjny jest więc jednowątkowy.
- Mimo jednowątkowej natury programów dostęp do API karty graficznej zapewniany przez wasm pozwala na wprowadzenie znacznych optymalizacji korzystających z wysokiej mocy obliczeniowej i równoległości operacji nowoczesnych kart graficznych za pomocą takich technologii jak compute shaders.
- Programy wasm mogą operować na dwóch backendach renderowania - WebGL i WebGPU. WebGL jest starszym standardem o znacznie ograniczonych możliwościach, ale WebGPU wymaga dodatkowego wsparcia przez przeglądarkę. W większości popularnych przeglądarek wsparcie WebGPU istnieje ale w czasie pisania jest ono zwykle opcją eksperymentalną.
