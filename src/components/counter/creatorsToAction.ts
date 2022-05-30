type ReturnTypes<T> = {
  // Mapped Typeでobjectを走査=>値を取ってそれが何かしらの関数である場合は組み込みユーティリティー型で関数の戻り型を取得
  [K in keyof T]: T[K] extends (...args: any[]) => any ? ReturnType<T[K]> : never
}

// オブジェクトの値をUnionTypeとして取得する
type Unbox<T> = T extends { [k in keyof T]: infer U } ? U : never

export type CreatorsToActions<T> = Unbox<ReturnTypes<T>>
