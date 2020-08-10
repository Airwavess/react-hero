# Project Architecture

## 專案的架構

這個專案以 `create-react-app` 創建，在 src 目錄中包含跟這個應用程式的所有檔案，也包括測試與 storybook。

## Page

在 `src/pages` 中會放入各個頁面的 .tsx 檔案，並且從 `src/components` 中 import 所需要的 component 作為頁面中的內容。

雖然在專案需求中說明需要兩個頁面，但是由於「點擊連結但不能重複渲染 HeroList」這個關鍵需求，所以 HeroList 以條件式選染的方式成為 HeroPage 的一部分。

## Components

在 `src/components` 放的是 .tsx 的 React component 檔案，並且將可能會重複用到的 component 放至 `src/components/_Shared` 資料夾中。此外，每一個 component 可能會有 props 的傳遞，而 props 的型別定義則放置於 `src/components/types` 中，並以 `<component-name>.ts` 定義型別檔案的名稱。

## Redux

在這個專案中使用 redux 作為管理狀態的系統，並將相關的檔案放置 `src/redux` 中。由於隨著專案的擴大，可能會有多個管理不同類別狀態的 reducer，所以定義了 `root-reducer.ts`，作為 `createStore` 的進入點。此外，這個專案還使用到了 ][redux-saga](https://redux-saga.js.org/) 作為非同步處理的函式庫，並將進入點定義於 `root-saga.ts`。

為了能夠區別各種屬於不同類別的狀態，在 `src/redux` 中會將會分成不同的資料夾，每一個資料夾中皆包含以下幾個檔案:

- `action.ts`: redux 的 action 定義。
- `reducer.ts`: redux 的 reducer 定義。
- `types.ts`: 定義 reducer 的 state type，以及定義 action 的 type。
- `saga.ts`: 定義 saga function。

## API

首先，這個專案使用的是 axios 作為發送 HTTP 請求的函式庫，為了能夠管理 API 的進入點，將 URL 放置根目錄的 .env 檔案中，並且在 root-api.ts 使用 axios 創建 API 的進入點。而 REST API 主要以**資源名稱**作為以及 HTTP method 作為 endpoint，所以我們可以將各個資源定義於 `src/apis/<資源名稱>.ts` 中。

例如，BASE_URL 是 example.com，所以會將 example.com 定義於 .env，並且在 `root-api.ts` 使用 axios 創建 API 的進入點。並且我們有一系列的資源為 heroes，所以定義了 `src/apis/heroes.ts`，並在這個檔案中定義 GET、PATCH 等等的 endpoint。

## Utility Function

專案中可能會使用到許多重複的 function，這些 function 會被歸類於 `src/utils` 中。

## Testing

這個專案的測試放置於 `src/__tests__` 中，以 `src/` 中每個需要被測試的資料夾作為分類。例如，在 `src/` 中需要被測試的檔案分別被放置於 components、pages、redux、utils，所以在 **test** 中便會以召每個資料夾的名稱作為測試的分類。換句話說，**tests** 中的資料夾結構與主程式的資料夾結構近乎相同。
