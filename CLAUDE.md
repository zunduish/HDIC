# CLAUDE.md

Энэ файл нь энэ репозиторид ажиллах үед Claude Code-д зориулсан заавар юм.

## Харилцааны хэл

- **Бүх тайлбар, дүгнэлт, мессежийг ЗААВАЛ Монгол хэлээр бич.**
- Код, файлын нэр, terminal команд, сангийн нэр зэрэг нь эх хэлээрээ (англи) үлдэнэ.
- Commit message-ийг мөн Монгол хэлээр бичнэ.

## Өөрчлөлтийн түүх хөтлөх дүрэм

Энэ репозиторид ямар нэг өөрчлөлт хийсэн бол **"Өөрчлөлтийн түүх"** хэсэгт
шинэ мөр нэмж бүртгэнэ. Бүртгэх зүйлс:

- Огноо (ЖЖЖЖ-СС-ӨӨ)
- Салбарын нэр
- Хийсэн ажлын товч тайлбар (Монголоор)
- Хамаарах үндсэн файлууд

Бүртгэлийг өөрчлөлт хийсэн commit-тайгаа хамт хийнэ.

## Төслийн тойм

**HDIC** — ус хангамж, ариутгах татуурга, инженерийн байгууламжийн зөвлөх
үйлчилгээний танилцуулга вэбсайт.

- **Framework**: Nuxt 3 (Vue 3, TypeScript), `ssr: false` — SPA горим
- **Эх код**: `src/` (`srcDir: "src/"`)
- **Загвар**: Tailwind CSS + Ant Design Vue (less) + SCSS
- **Өгөгдөл**: GraphQL (Apollo Client), Axios
- **Бусад**: Highcharts (график), Leaflet (газрын зураг), Swiper, vue-i18n, Vuex
- **Node**: v16 (`.nvmrc`)

## Командууд

```bash
yarn dev        # хөгжүүлэлтийн сервер
yarn build      # production build
yarn generate   # статик сайт үүсгэх
yarn preview    # build-ийг урьдчилан харах
yarn lint       # ESLint шалгалт
yarn lint:fix   # ESLint алдааг автоматаар засах
```

Өөрчлөлт хийсний дараа **`yarn lint`**-ийг заавал ажиллуулж шалгана.

## Бүтэц

```
src/
├── app.vue              # үндсэн entry
├── assets/styles/       # tailwind.css, ant_light/dark.less, app.scss, plugins.scss
├── components/
│   ├── home/            # нүүр хуудасны хэсгүүд
│   └── layouts/         # header, footer зэрэг байршуулалтын компонентууд
├── consts/const.js      # тогтмол утгууд
├── graphql/queries.js   # GraphQL query-үүд
├── layouts/default.vue  # үндсэн layout
├── locales/             # mn.js, en.js — орчуулга
├── pages/               # index, activity, projects, projectdetail, contact
├── plugins/             # main.ts болон core plugin-ууд
├── store/               # Vuex (index, getters, mutations)
└── utils/               # date.js, image.js, number.js
```

## Орчны хувьсагч

`.env` файлыг `.env.development`-оос хуулж үүсгэнэ. Ашиглагдах хувьсагчид:

| Хувьсагч | Тайлбар |
|---|---|
| `LAMBDA_BASE_URL` | Backend API-ийн хаяг (заавал тохируулна) |
| `LAMBDA_ROOT` | Үндсэн зам |
| `LAMBDA_TITLE` | Сайтын гарчиг |
| `LAMBDA_SUB_TITLE` | Дэд гарчиг |
| `LAMBDA_DESCRIPTION` | Тайлбар |
| `LAMBDA_PRIMARY_COLOR` | Үндсэн өнгө (less/scss-д дамждаг) |
| `LAMBDA_FAVICON` | Favicon |

`LAMBDA_PRIMARY_COLOR` нь `nuxt.config.ts`-д less болон scss-ийн хувьсагч
болж дамждаг тул өнгө өөрчлөх бол эндээс эхэлнэ.

## Git

- Хөгжүүлэлтийн салбар: `claude/hdic-6phucl`
- Remote: `origin` → `github.com/zunduish/HDIC`
- Push: `git push -u origin claude/hdic-6phucl`
- Хэрэглэгч тусгайлан хүсээгүй бол pull request үүсгэхгүй.

## Өөрчлөлтийн түүх

| Огноо | Салбар | Хийсэн ажил | Файлууд |
|---|---|---|---|
| 2026-08-28 | `claude/hdic-6phucl` | `CLAUDE.md` үүсгэв. Монгол хэлээр тайлбарлах дүрэм, төслийн тойм, командууд, бүтэц, орчны хувьсагчийн жагсаалт болон өөрчлөлтийн түүх хөтлөх хэсгийг нэмэв. | `CLAUDE.md` |
