/**
 * ITエンジニア ニュース 蓄積データ
 */
const newsData = [
    {
        date: "2026/02/27",
        title: "ソフトバンク、第6回「日経Smart Work大賞2026」にて大賞を受賞",
        url: "https://www.softbank.jp/corp/news/press/sbkk/2026/20260227_01/",
        summary: "テクノロジー活用力と人材投資力が最高評価。IT人材の育成や管理職登用が評価された。",
        entryIds: [12, 18],
        stars: 5,
        hook: "「Smart Work大賞」受賞企業での、最先端の働き方とキャリア自律を訴求。",
        mapping: [
            { id: 12, pain: "技術者が評価されない文化", appeal: "日経5つ星・大賞受賞。IT人材への投資を惜しまない、国内最高峰のエンジニア環境" },
            { id: 18, pain: "キャリアの不透明感", appeal: "若手の積極登用と副業解禁。主体的なキャリア形成を会社が全力支援する文化" }
        ]
    },
    {
        date: "2026/02/27",
        title: "NTTデータ、インドで5,000人を増員。1億ドル超の大型案件が倍増",
        url: "https://jp.reuters.com/business/technology/ntt-data-india-hiring-5000-20260227/",
        summary: "グローバルでのITコンサル・開発需要が急増。インド拠点での体制を大幅強化へ。",
        entryIds: [13, 21],
        stars: 4,
        hook: "世界規模のダイナミックなプロジェクトへ参画できる、グローバルキャリアの提示。",
        mapping: [
            { id: 13, pain: "国内の小規模案件に飽きている", appeal: "1億ドル超のメガプロジェクト。世界が注目するITインフラ構築に携わる誇り" },
            { id: 21, pain: "英語・グローバルへの壁", appeal: "世界4万人のエンジニアと連携。国内に居ながらグローバル基準の技術に触れる機会" }
        ]
    },
    {
        date: "2026/02/27",
        title: "Rapidus、総額2,676億円の調達完了。政府・32社連合が国産半導体を支援",
        url: "https://www.itmedia.co.jp/news/articles/2602/27/news101.html",
        summary: "ソニー、NTT、トヨタ、ソフトバンク等32社が出資。2nm世代の量産化へ弾み。",
        entryIds: [5, 12],
        stars: 5,
        hook: "「技術の日本」を取り戻す、国家プロジェクトへの貢献。低レイヤー・高度技術への挑戦。",
        mapping: [
            { id: 5, pain: "技術的な挑戦ができない現状", appeal: "2nm世代の最前線。ハード×ソフトの境界線で、一生モノの技術資産を築く" },
            { id: 12, pain: "自分の仕事の社会への意義", appeal: "日本経済に20兆円貢献する壮大なミッション。エンジニアが技術で世界を動かす実感" }
        ]
    },
    {
        date: "2026/02/27",
        title: "JustSystems、生成AI搭載の「ATOK MiRA」発表。文書修正をAIが支援",
        url: "https://www.itmedia.co.jp/news/articles/2602/27/news042.html",
        summary: "文章のトーン変更や誤字脱字の高度な修正機能をIMEに統合。業務効率化を加速。",
        entryIds: [1, 10],
        stars: 4,
        hook: "AIツールを使いこなし、圧倒的な「ドキュメント生産性」を持つエンジニアへの進化。",
        mapping: [
            { id: 1, pain: "ドキュメント作成の多さに疲弊", appeal: "最新AI（ATOK MiRA等）を貸与。実装以外の無駄を省き、コードに集中できる環境" },
            { id: 10, pain: "AIに代替される恐怖", appeal: "AIを「利用する側」に回り、実装力×AI活用力で市場価値を盤石にする戦略" }
        ]
    },
    {
        date: "2026/02/27",
        title: "デンソークリエイト、全工程支援AI「DC Agentiqs」提供開始",
        url: "https://www.agentiqs.app/",
        summary: "要件定義からテストまでAIがエンジニアを支援する新プラットフォーム。",
        entryIds: [12, 2],
        stars: 4,
        hook: "AIツールを導入し、開発者の「負債解消」を支援する現場を訴求。",
        mapping: [
            { id: 12, pain: "技術負債返済への無理解", appeal: "AIツールを積極導入し、負債解消を全肯定するエンジニア第一の環境" },
            { id: 2, pain: "実務経験なしで門前払い", appeal: "開発プロセス支援系AI案件という、新たな参画パスの提示" }
        ]
    },
    {
        date: "2026/02/27",
        title: "NEC、OMO支援サービス「NeoSarf Loyalty Core Service」を発表",
        url: "https://news.mynavi.jp/article/20260227-3132711/",
        summary: "店舗・EC・アプリを融合。顧客行動データの統合とロイヤル顧客育成を支援。",
        entryIds: [13, 4],
        stars: 4,
        hook: "実店舗×デジタルの「OMOプロダクト」開発に携われる上流案件の訴求。",
        mapping: [
            { id: 13, pain: "ユーザーの反応が不明な虚無感", appeal: "店舗とネットを繋ぐ。リアルの反響が見える、やりがいのあるプロダクト開発" },
            { id: 4, pain: "中間会社の中抜き不満", appeal: "一次請け体制でのエンド直案件。商流改善による高単価の実現" }
        ]
    },
    {
        date: "2026/01/29",
        title: "IPA「情報セキュリティ10大脅威 2026」発表。AIリスクが初選出",
        url: "https://www.ipa.go.jp/security/vuln/10threats2026.html",
        summary: "機密情報のAI学習利用や生成AIによる攻撃の精巧化が急浮上。",
        entryIds: [19, 9],
        stars: 5,
        hook: "単なるAI導入ではなく「安全な活用」をリードするセキュリティ人材の需要を強調。",
        mapping: [
            { id: 19, pain: "専門性が理解されず一般と同単価", appeal: "AIリスク時代のセキュリティ知見。希少価値に応じたプレミアム報酬の適用" },
            { id: 9, pain: "技術負債による負のスパイラル", appeal: "安全性を無視した「炎上現場」を回避。品質と安全を重んじるプロジェクト選定" }
        ]
    },
    {
        date: "2026/02/27",
        title: "デジタルガレージ、共同創業者 伊藤穰一氏が取締役を退任",
        url: "https://www.itmedia.co.jp/news/articles/2602/27/news123.html",
        summary: "専務執行役員も退職。過去の資金提供問題への捜査資料公表が影響か。",
        entryIds: [13, 1],
        stars: 3,
        hook: "企業のガバナンスや透明性がキャリアの安定性に与える影響を考えるきっかけに。",
        mapping: [
            { id: 13, pain: "会社の将来への倫理的不安", appeal: "透明性の高い経営とクリーンなガバナンスを持つ企業での、長期的な信頼構築" },
            { id: 1, pain: "キャリアの急な中断への懸念", appeal: "リスク管理の行き届いた安定企業。個人の経歴に傷をつけない、誠実な組織文化" }
        ]
    }
];
