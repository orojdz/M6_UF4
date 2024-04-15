# UF4. The Movie Data Base + Postman

### Objectiu
Mitjançant la plataforma The Movie Database invocarem a la seva API per a que ens permeti afegir
pel·lícules a preferits, crear llistes, visualitzar-les.

## Primers passos. Claus. Api key, request code i session id


### [Obtenir request token amb la API KEY](https://developer.themoviedb.org/reference/authentication-create-request-token)

![api_key](/img/request_token.png)

Despres cridarem aquesta URL des del navegador i acceptar

```
https://www.themoviedb.org/authenticate/{REQUEST_TOKEN}
```

### [Generar session id](https://developer.themoviedb.org/reference/authentication-create-session) amb el request_token

![session_id](/img/session_id.png)

## Exercicis postman

### 1. Des de la web afegeix una pel·lícula a preferits

![favorita](/img/favorita.png)

### 2. Mitjançant el postman llista totes les pel·lícules preferides

![get_favorites](/img/get_favorites.png)

![get_favorita](/img/favorites_movies.png)

### 3. Mitjançant el postman fes una cerca d’alguna pel·lícula que t’agradi

![get_movies_by_name](/img/get_movie_by_name.png)

### 4. Afegeix la pel·lícula a watchlist

![add_watchlist](/img/add_watchlist.png)

**body:** 

![body_raw_watchlist](/img/body_raw_watchlist_true.png)

**Watchlist**

![peli_watchlist](/img/peli_watchlist.png)

### 5. Crea una nova llista

![nova_llista](/img/nova_llista.png)

**Resultat:**

![llista](/img/llista.png)

![llista_postman](/img/llista_postman.png)

### 6. Mostra les llistes creades

![get_list](/img/get_list.png)

### 7. Afegeix una pel·lícula a la llista

![add_item](/img/add_item.png)

**Pel·lícules afegides**

![items_afegits](/img/items_afegits.png)