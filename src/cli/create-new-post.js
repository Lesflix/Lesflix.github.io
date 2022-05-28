const path = require("path")
const fs = require("fs-extra")
const matter = require("gray-matter")
const inquirer = require("inquirer")
const rr = require("recursive-readdir")

const CONTENTS_DIR = "/content/blog"
const TARGET_DIR = path.join(process.cwd(), CONTENTS_DIR)
const UTF_8 = "utf8"

// 함수 - 입력받은 타이틀을 파일명을 위한 값으로 변경
// 공백은 - 로 변경 / 전부 소문자로 변경
const makeSlug = title => {
  return title.split(" ").join("-").toLowerCase()
}

// 함수 - 타이틀 입력 받는 함수
const getTitle = async () => {
  const { title } = await inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "Enter the title",
      default: () => "New post title",
    },
  ])

  return title
}

// 함수 - Genres 가져옴
// 모든 md 파일의 Genres 모두 찾아옴
const findGenres = async () => {
  const markdownFiles = await rr(TARGET_DIR)
  const allGenres = new Set()
  markdownFiles
    .map(file => fs.readFileSync(file, UTF_8))
    .forEach(str => {
      allGenres.add(matter(str).data.genre)
    })
  return [...allGenres]
}
// 함수 - Genres 선택
// Genres  선택 가능
const getGenres = async () => {
  const genreList = await findGenres()

  if (0 < genreList.length) {
    const { answer } = await inquirer.prompt([
      {
        type: "list",
        name: "answer",
        message: "Select Genres",
        choices: genreList,
      },
    ])
    return answer
  } else return ""
}

// 함수 - countries 가져옴
// 모든 md 파일의 countries 모두 찾아옴
const findCountries = async () => {
  const markdownFiles = await rr(TARGET_DIR)
  const allCountries = new Set()
  markdownFiles
    .map(file => fs.readFileSync(file, UTF_8))
    .forEach(str => {
      allCountries.add(matter(str).data.countries)
    })
  return [...allCountries]
}
// 함수 - countries 선택
// countries  선택 가능
const getCountries = async () => {
  const countryList = await findCountries()

  if (0 < countryList.length) {
    const { answer } = await inquirer.prompt([
      {
        type: "list",
        name: "answer",
        message: "Select countryList",
        choices: countryList,
      },
    ])
    return answer
  } else return ""
}
// 함수 - 모든 Otts 가져옴
// 모든 md 파일의 Otts 모두 찾아옴
const findOtts = async () => {
  const markdownFiles = await rr(TARGET_DIR)
  const allOtts = new Set()
  markdownFiles
    .map(file => fs.readFileSync(file, UTF_8))
    .forEach(str => {
      matter(str).data.ott?.forEach(arr => allOtts.add(arr))
    })

  return [...allOtts]
}
// 함수 - Otts 선택
// Otts 중복 선택 가능
const getOtts = async () => {
  const ottList = await findOtts()
  if (0 < ottList.length) {
    const { answer } = await inquirer.prompt([
      {
        type: "checkbox",
        name: "answer",
        message: "Select SubCategories",
        choices: ottList,
      },
    ])
    return answer
  } else return []
}
// 함수 - 모든 Categories 가져옴
// 모든 md 파일의 Categories 모두 찾아옴
const findCategories = async () => {
  const markdownFiles = await rr(TARGET_DIR)
  const allCategories = new Set()
  markdownFiles
    .map(file => fs.readFileSync(file, UTF_8))
    .forEach(str => {
      return matter(str).data.categories?.forEach(arr => allCategories.add(arr))
    })

  return [...allCategories]
}
// 함수 - Categories 선택
// Otts 중복 선택 가능
const getCategories = async () => {
  const categoriesList = await findCategories()
  if (0 < categoriesList.length) {
    const { answer } = await inquirer.prompt([
      {
        type: "checkbox",
        name: "answer",
        message: "Select SubCategories",
        choices: categoriesList,
      },
    ])
    return answer
  } else return []
}
// 함수 - md 파일 양식으로 변경
const refineContents = rawContents => {
  return matter.stringify("", rawContents).split("'").join("")
}

// 터미널에서 node cli/create-new-post 실행
module.exports = (async function () {
  const date = new Date().toISOString()
  const title = await getTitle()
  const genre = await getGenres()
  const ottList = await getOtts()
  const cateList = await getCategories()
  const country = await getCountries()

  const headers = {
    title,
    originalTitle: "",
    description: "",
    genre,
    poster: `${title}.jpeg`,
    release: `""`,
    ott: `[${ottList}]`,
    countries: country,
    cover: `${title}.jpeg`,
    end: true,
    categories: `[${cateList}]`,
  }
  const contents = refineContents(headers)
  const type = "directory"

  const slug = makeSlug(title)

  const destDir = `${TARGET_DIR}/${genre ? `${genre}` : ""}${`/${slug}`}`
  const filePath = `${destDir}/${"index"}.md`

  const destDirExists = await fs.pathExists(destDir)
  if (!destDirExists) {
    await fs.ensureDir(destDir)
  }

  fs.writeFile(filePath, contents, err => {
    if (err) {
      console.error("Unknown Error: Cannot write file!")
      return
    }

    console.log("\nSuccess to create new post!")
    console.log(`${filePath}\n${contents}`)
  })
})()
