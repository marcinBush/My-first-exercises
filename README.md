# My-first-exercises

1. Funkcja, która jako parametr przyjmuje dowolne słowo i zwraca ciąg znaków złożonych
ze znaków, znajdujących się na parzystym indeksie podanego jako parametr słowa. Pętle (for, while).


2. Pętla for, która modyfikuje tablicę ze zwierzętami, sprawiając, że stają się niesamowite! 
Początkowa tablica wygląda tak:

const zwierzęta = [
"pantera",
"pirania",
"łasica"
];

...po wykonaniu pętli tak:
[
"Niesamowita pantera",
"Niesamowita pirania",
"Niesamowita łasica"
]


3. Funkcja, która jako parametr przyjmuje liczbę naturalną wiekszą od 0.
Funkcja zwraca losowo utworzony ciag znaków wybranych ze zbioru (const alfabet = "abcdefghijklmnopqrstuvwxyz";). 
Nowo utworzony ciąg znaków ma długość określoną przez liczbę podaną jako argument wywołania tej funkcji - np.
  generuj(3); -> 'fws';
  generuj(5); -> 'ldqwa';
 
 
4. Podany łańcuch znaków: 'JAVASCRIPT JEST SUPER'.
Rezultatem funkcji jest ciąg w postaci 'J4V42CR1PT J32T 2UP3R'.

czyli w pierwszym łańcuchu zmienione litery wg. wzoru
  A = 4
  E = 3
  I = 1
  O = 0
  S = 2

Funkcja przyjmuje jako parametr dowolny łańcuch znaków i zwraca łańcuch przerobiony wg powyszego wzorca.
  
  
5. Funkcja przyjmuje dowolne słowo. Funkcja zwraca liczbę wystąpienia każdego znaku w podanym słowie
  np:

  enumerate_characters('koparka') -> k: 2, o: 1, p: 1, a: 2, r: 1
