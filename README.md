# ClassHub Lite

ClassHub Lite egy egyszerű iskolai közösségi webalkalmazás HTML, CSS és JavaScript használatával.  
A projekt célja a csapatmunka, Git használat és frontend fejlesztés gyakorlása.

---

# Funkciók

- többoldalas webalkalmazás
- profil oldal
- események oldal
- galéria oldal
- órarend oldal
- like rendszer
- dark mode
- responsive design

---

# Technológiák

- HTML
- CSS
- JavaScript

Backend nincs, minden adat frontend oldalon (localStorage vagy statikus adatok).

---

# Git workflow

A projekt a következő branch struktúrát használja:

main → stabil, kész verzió
dev → fejlesztési ág
feature/* → új funkciók
---

## Fejlesztési folyamat

1. Issue kiválasztása
2. Feature branch létrehozása (pl. feature/theme-selector)
3. Fejlesztés saját branch-en
4. Commitok készítése
5. Branch pusholása
6. Pull request készítése a dev branch-be
7. Review után merge
---

## Release folyamat

Ha egy verzió elkészült:

dev → main merge

Verziók például:
v0.1 alap UI
v0.2 interaktív funkciók
v1.0 kész projekt

---

## Commit szabályok

feat: új funkció
fix: hiba javítása
style: kinézet módosítás
docs: dokumentáció

---

## Branch elnevezés

Az alapértelmezett név teljesen jó amit a pull request ad.

---

## Pull request szabályok

- minden PR egy feladatot old meg
- PR mindig a dev branch-be megy
- minden PR-hez tartozik issue
- merge előtt review szükséges

---

## Git flow

feature branch
↓
pull request
↓
dev branch
↓
release PR
↓
main branch

---

feature/login
feature/theme
feature/feed
↓
dev
↓
main

---

## Alap szabályok

- nem dolgozunk közvetlenül main branch-en
- nem pusholunk main branch-re
- minden változtatás feature branch-en történik
- minden módosítás PR-en keresztül kerül be

---

## Hibakezelés

Ha rossz branch-en dolgozol:
- hozz létre új branch-et dev-ből
- vidd át a módosításokat

Ha rossz commit történt:
- git reset
- git cherry-pick

Ha rossz PR készült:
- zárd le és nyiss újat

---

## Alap elv

Ha bizonytalan vagy, ne merge-elj, kérdezz rá.
