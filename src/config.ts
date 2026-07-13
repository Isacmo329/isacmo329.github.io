/**
 * サイト全体の設定・文言の一元管理ファイル。
 * キャッチコピーやリンク先の差し替えはこのファイルだけ編集すればよい。
 */
export const SITE = {
  name: 'まちのAI屋さん',
  // TODO: キャッチコピー確定後に差し替え（現在は仮）
  catchcopy: 'AIを、まちのことばで。',
  subcopy: '長崎の中小企業・個人事業主のAI活用とWeb制作を、地元の相談相手としてサポートします。',
  description:
    '長崎でAIの相談・AIセミナー・ホームページ制作なら「まちのAI屋さん」。補助金を活用したAI研修、月額制のAI顧問、Web制作・保守まで、地元の相談相手としてサポートします。',

  // TODO: LINE公式アカウント開設後にURLを差し替え
  lineUrl: 'https://lin.ee/XXXXXXX',
  // TODO: Formspree のフォームIDを取得後に差し替え
  formspreeEndpoint: 'https://formspree.io/f/XXXXXXXX',

  area: '長崎県長崎市',
  // TODO: 公開前に正式な事業者情報に差し替え
  owner: '（代表者名）',
} as const;

export const CATEGORIES = {
  tutorial: 'AI活用チュートリアル',
  subsidy: '補助金・支援制度',
  case: '導入事例・現場の声',
  news: 'やさしいAIニュース',
} as const;

export type CategoryKey = keyof typeof CATEGORIES;
