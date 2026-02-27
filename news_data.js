/**
 * ITエンジニア ニュース 蓄積データ
 */
const newsData = [
    {
        date: "2026/02/27",
        title: "デンソークリエイト、全工程支援AI「DC Agentiqs」提供開始",
        url: "https://atpress.ne.jp/news/425514",
        summary: "要件定義からテストまでAIがエンジニアを支援する新プラットフォーム。",
        entryIds: [12, 2],
        stars: 5,
        hook: "AIツールを導入し、開発者の「負債解消」を支援する現場を訴求。",
        mapping: [
            { id: 12, pain: "技術負債返済への無理解", appeal: "AIツールを積極導入し、負債解消を全肯定するエンジニア第一の環境" },
            { id: 2, pain: "実務経験なしで門前払い", appeal: "開発プロセス支援系AI案件という、新たな参画パスの提示" }
        ]
    },
    {
        date: "2026/02/27",
        title: "OpenAI、BCG・マッキンゼーら4社と「Frontier Alliances」始動",
        url: "https://ledge.ai/articles/openai_frontier_alliances_bcg_mckinsey_accenture_capgemini",
        summary: "企業へのAI導入の「実装ボトルネック」を解決するアライアンス。",
        entryIds: [7, 13],
        stars: 5,
        hook: "企業のAI実装における「上流コンバル・PM」への職種シフトを提案。",
        mapping: [
            { id: 7, pain: "実装体力への将来不安", appeal: "実装から「組織へのAI実装PM」へのバリュー転換" },
            { id: 13, pain: "ビジネス貢献の不透明さ", appeal: "AI導入のボトルネックを解く、事業直結の戦略的エンジニア" }
        ]
    },
    {
        date: "2026/02/27",
        title: "日本語推論型LLM「GPT-OSS Swallow」「Qwen3 Swallow」公開",
        url: "https://ledge.ai/articles/gpt_oss_qwen3_swallow_japanese_reasoning_llm_tokyo_science_aist",
        summary: "東工大・産総研が開発。日本語性能と推論力を両立したオープンモデル。",
        entryIds: [15, 5],
        stars: 4,
        hook: "国産AI開発やOSS貢献を重視するテック企業の案件紹介。",
        mapping: [
            { id: 15, pain: "業務成果が社外から見えない", appeal: "国産LLM開発やOSS貢献を通じた、個人の技術ブランド強化" },
            { id: 5, pain: "レガシー保守による成長停止", appeal: "LLMブームを機にしたモダンスタックへの再起動と移行支援" }
        ]
    },
    {
        date: "2026/02/27",
        title: "OpenClaw（自律型AI）の利用急拡大。Googleが警告",
        url: "https://ledge.ai/articles/openclaw_gemini_antigravity_usage_restrictions_202602",
        summary: "AIエージェントの自律性が高まる中、開発者の役割が「監督者」へ変容。",
        entryIds: [10, 1],
        stars: 5,
        hook: "AI時代に淘汰されない、シニアエンジニアの「監督能力」をバリュー化。",
        mapping: [
            { id: 10, pain: "若手との実装スピード比較", appeal: "「AIを監督する」役回りへのシフト。シニアの経験を生存戦略に" },
            { id: 1, pain: "自分の適正単価が不明", appeal: "AIエージェント監督能力という新市場における高単価の提示" }
        ]
    },
    {
        date: "2026/02/27",
        title: "防衛省、国会答弁資料に生成AIを試験導入。運用開始へ",
        url: "https://ledge.ai/articles/mod_ai_diet_answer_assistant_trial_launch",
        summary: "公共部門でのAI活用本格化。答弁作成アシスタント。",
        entryIds: [2, 13],
        stars: 4,
        hook: "公共・大規模システムのAI化案件という、希少なキャリア選択肢。",
        mapping: [
            { id: 2, pain: "レガシー現場で試行機会ゼロ", appeal: "国家レベルの大規模システム×AIという、唯一無二のレジュメ作り" },
            { id: 13, pain: "プロダクトへの愛着欠如", appeal: "公共インフラを支援する、圧倒的な社会貢献実感とサービス愛" }
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
            { id: 19, pain: "専門性が理解されず一般と同単価", appeal: "AIリスク時代のセキュリティ知見。プレミアム報酬での評価" },
            { id: 9, pain: "技術負債による負のスパイラル", appeal: "安全性を無視した「地雷現場」を回避する、品質重視の環境提供" }
        ]
    },
    {
        date: "2026/02/27",
        title: "NEC、OMOを支援する「NeoSarf Loyalty Core Service」を発表",
        url: "https://jpn.nec.com/news/release/202602/2701.html",
        summary: "オンラインとオフラインを融合する統合顧客基盤をクラウドで提供。",
        entryIds: [13, 4],
        stars: 4,
        hook: "実店舗×デジタルの「OMOプロダクト」開発に携われる上流案件の訴求。",
        mapping: [
            { id: 13, pain: "ユーザーの反応が不明な虚無感", appeal: "OMO現場での直接的なフィードバックと事業貢献感" },
            { id: 4, pain: "中間会社の中抜き不満", appeal: "一次請け体制でのエンド直案件。商流改善による高単価の実現" }
        ]
    },
    {
        date: "2026/02/27",
        title: "最先端半導体Rapidus、エプソンが追加出資。日本の製造力強化へ",
        url: "https://corporate.epson/ja/news/2026/260227.html",
        summary: "2nm世代の国産半導体実現に向け、異業種からの支援が加速。",
        entryIds: [12, 5],
        stars: 3,
        hook: "国産テクノロジーの「本丸」に近い低レイヤー・大規模開発案件の紹介。",
        mapping: [
            { id: 12, pain: "技術の正論が通らない組織", appeal: "国家プロジェクト。職人気質のエンジニアが尊重される文化" },
            { id: 5, pain: "市場から取り残される恐怖", appeal: "次世代半導体×低レイヤー。唯一無二の技術スタックへの転向" }
        ]
    }
];
