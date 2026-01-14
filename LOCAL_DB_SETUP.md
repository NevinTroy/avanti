## Local Postgres quickstart (macOS/Homebrew)

```bash
brew install postgresql
brew services start postgresql
createdb avanti
# optional user/password
psql -d avanti -c "ALTER USER $(whoami) WITH PASSWORD 'password';"
```

Then set `.env.local`:
```
DATABASE_URL=postgres://postgres:password@localhost:5432/avanti
# or use PGHOST/PGDATABASE/PGUSER/PGPASSWORD/PGPORT/PGSSLMODE
```

The API route will auto-create the `quotes` table on first submission. To inspect saved quotes:
```bash
psql "$DATABASE_URL" -c "SELECT * FROM quotes ORDER BY created_at DESC LIMIT 20;"
```


