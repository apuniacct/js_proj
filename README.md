# Projekt Javascript - Implementacja WASM
## Cel projektu
Celem projektu jest użycie połączenia języka Javascript z programem skompilowanym do formatu Web Assembly w celu wyświetlenia prostej demonstracyjnej "gry komputerowej" wewnątrz strony internetowej. \
Program demonstracyjny będzie napisany w języku Rust w oparciu o silnik Bevy.
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

Jeśli program będzie wspierał dodatkowe argumenty będą one identyczne dla obu endpointów

## Postęp projektu
### Commit 1 
- Program testowy działa w środowisku testowym po skompilowaniu do WASM z backendem graficznym WebGL2
- Backend/frontend niezbudowany, program uruchamia się w minimalnym środowisku serwera wasm-server-runner
