/* ════════════════════════════════════════════════════════════
   publications-data.js
   更新手順: researchmap.jp/moriken_stat を参照し、
   新しい論文を PUBLICATIONS_DATA の先頭に、
   新しい科研費を GRANTS_DATA の先頭に追加してください。
   index.html と publications.html の両方に自動反映されます。
════════════════════════════════════════════════════════════ */

const PUBLICATIONS_DATA = [
  // ── 2026 ──
  { year: 2026, title: "Vignette-Based Estimation of Utilities in Patients With Metastatic Triple-Negative Breast Cancer in Japan", authors: "Mao Yamaguchi, Kensuke Moriwaki, Tsuguo Iwatani, Kojiro Shimozuma", journal: "Value in Health Regional Issues 101619, 2026年3月", doi: null },
  { year: 2026, title: "Comparative Cost-Effectiveness Analysis of Multiple First-Line Treatments for HER2-Negative Unresectable Advanced or Recurrent Gastric Cancer in Japan", authors: "Kosuke Morimoto, Kensuke Moriwaki, Yoshitaka Nishikawa, Tomomi Maeda, Mayumi Toyama, Nobukazu Agatsuma, Satomi Kojima, Takahiro Utsumi, Yoshimitsu Takahashi, Kojiro Shimozuma, Takeo Nakayama", journal: "PharmacoEconomics - Open, 2026年2月", doi: null },
  { year: 2026, title: "Cost-effectiveness analysis of low bone mass prevention in Chinese older men with excessive alcohol consumption: a modelling study.", authors: "Xihan Lin, Jinyu Liu, Lin Wang, Ting Liu, Yu Zhang, Kensuke Moriwaki, Ruxu You", journal: "BMJ Open 16(1): e095486, 2026年1月", doi: null },
  // ── 2025 ──
  { year: 2025, title: "Cost-Effectiveness of Pembrolizumab as First-Line Therapy for Advanced Colorectal Cancer With High Microsatellite Instability or Mismatched Repair Deficiency in Japan.", authors: "Seiya Taniguchi, Kensuke Moriwaki, Kosuke Morimoto, Kojiro Shimozuma", journal: "Value in Health Regional Issues 54: 101555, 2025年12月", doi: null },
  { year: 2025, title: "Cost-Effectiveness of Fracture Prevention in Postmenopausal Women With Early Breast Cancer in China.", authors: "Jin-Yu Liu, Xi-Han Lin, Yi-Han Chen, Lin Wang, Ting Liu, Yu Zhang, Takahiro Mori, Kensuke Moriwaki, Ru-Xu You", journal: "Journal of Cachexia, Sarcopenia and Muscle 16(6): e70161, 2025年12月", doi: null },
  { year: 2025, title: "Cost-effectiveness analysis of pembrolizumab plus chemotherapy versus chemotherapy as first line chemotherapy for patients with unresectable advanced esophageal cancer in Japan.", authors: "Hirohito Kakinuma, Daisuke Takada, Hisashi Itoshima, Susumu Kunisawa, Kensuke Moriwaki, Michitaka Honda, Kiyohide Fushimi, Yuichi Imanaka", journal: "Esophagus, 2025年7月", doi: null },
  // ── 2024 ──
  { year: 2024, title: "Cost-effective analysis of transcatheter aortic valve replacement in patients with severe symptomatic aortic stenosis: A prospective multicenter study.", authors: "Makoto Amaki, Kensuke Moriwaki, Michikazu Nakai, Tetsuhiro Yamano, Atsushi Okada, Hideaki Kanzaki, Masaki Izumo, Hiroki Usuku, Tetsuari Onishi, Toshiyuki Nagai, Yoshihiro Miyamoto, Tomoyuki Fujita, Hiroya Kawai, Yoshihiro Akashi, Kenichi Tsujita, Satoaki Matoba, Junjiro Kobayashi, Chisato Izumi, Toshihisa Anzai", journal: "Journal of Cardiology 83(3): 169-176, 2024年3月", doi: null },
  { year: 2024, title: "Cost-effectiveness Analysis of Nivolumab Plus Ipilimumab Combination Therapy as First-line Treatment for Advanced Renal Cell Carcinoma in Japan.", authors: "Tomomi Maeda, Kensuke Moriwaki, Kosuke Morimoto, Xiuting Mo, Takashi Yoshioka, Rei Goto, Kojiro Shimozuma", journal: "Value in Health Regional Issues 40: 118-126, 2024年1月", doi: null },
  { year: 2024, title: "2型糖尿病に対するチルゼパチドの費用対効果評価", authors: "柏 宗伸, 岩本 哲哉, 酒井 未知, 富樫 慎太郎, 森脇 健介, 森本 航輔, 白岩 健, 下妻 晃二郎, 福田 敬", journal: "Academic Technology Assessment Group (ATAG) Reports 2(5): 3-44, 2024年", doi: null },
  // ── 2023 ──
  { year: 2023, title: "Cost-effectiveness analysis of nivolumab plus chemotherapy vs chemotherapy for patients with unresectable advanced or metastatic HER2-negative gastric or gastroesophageal junction or esophageal adenocarcinoma in Japan.", authors: "Kosuke Morimoto, Kensuke Moriwaki, Kojiro Shimozuma, Takeo Nakayama", journal: "Journal of Gastroenterology, 2023年9月", doi: null },
  { year: 2023, title: "既存治療で効果不十分な尋常性乾癬患者に対するビメキズマブの費用対効果評価", authors: "酒井 未知, 此村 恵子, 森本 航輔, 森脇 健介, 柏 宗伸, 小嶋 智美, 白岩 健, 下妻 晃二郎, 福田 敬", journal: "Academic Technology Assessment Group (ATAG) Reports 1(3): 3-69, 2023年", doi: null },
  // ── 2022 ──
  { year: 2022, title: "Cost-effectiveness analysis of universal screening for biliary atresia in Japan", authors: "Eri Hoshino, Kensuke Moriwaki, Kosuke Morimoto, Kotomi Sakai, Nobuyuki Shimohata, Keiko Konomura, Kevin Y. Urayama, Mitsuyoshi Suzuki, Kojiro Shimozuma", journal: "The Journal of Pediatrics, 2022年9月", doi: null },
  { year: 2022, title: "Cost-Effectiveness of First-Line Nivolumab Plus Ipilimumab Combination Therapy in Advanced Non-Small-Cell Lung Cancer in Japan.", authors: "Xiuting Mo, Kensuke Moriwaki, Kosuke Morimoto, Kojiro Shimozuma", journal: "Clinical Drug Investigation 42(7): 599-609, 2022年7月", doi: null },
  { year: 2022, title: "Direct health care cost of treatment and medication of biliary atresia patients using the National Database of Health Insurance Claims and Specific Health Checkups.", authors: "Eri Hoshino, Keiko Konomura, Masayuki Obatake, Kensuke Moriwaki, Michi Sakai, Kevin Y. Urayama, Kojiro Shimozuma", journal: "Pediatric Surgery International 38(4): 547-554, 2022年4月", doi: null },
  { year: 2022, title: "Parathyroidectomy versus cinacalcet among patients undergoing hemodialysis.", authors: "Hirotaka Komaba, Takayuki Hamano, Naohiko Fujii, Kensuke Moriwaki, Atsushi Wada, Ikuto Masakane, Kosaku Nitta, Masafumi Fukagawa", journal: "The Journal of Clinical Endocrinology and Metabolism 107(7): 2016-2025, 2022年3月", doi: null },
  { year: 2022, title: "Cost-Effectiveness of Nab-Paclitaxel and Gemcitabine Versus Gemcitabine Monotherapy for Patients with Unresectable Metastatic Pancreatic Cancer in Japan.", authors: "Kosuke Morimoto, Kensuke Moriwaki, Takako Kaneyasu, Hitomi Nakayama, Kojiro Shimozuma", journal: "Value in Health Regional Issues 28: 54-60, 2022年3月", doi: null },
  // ── 2021 ──
  { year: 2021, title: "Proton beam therapy for children and adolescents and young adults (AYAs): JASTRO and JSPHO Guidelines.", authors: "Masashi Mizumoto, Hiroshi Fuji, Mitsuru Miyachi, Toshinori Soejima, Tetsuya Yamamoto, Norihiro Aibe, Yusuke Demizu, Hiromitsu Iwata, Takayuki Hashimoto, Atsushi Motegi, Atsufumi Kawamura, Keita Terashima, Takashi Fukushima, Tomohei Nakao, Akinori Takada, Minako Sumi, Junjiro Oshima, Kensuke Moriwaki, Miwako Nozaki, Yuji Ishida, Yoshiyuki Kosaka, Keisuke Ae, Ako Hosono, Hideyuki Harada, Etsuyo Ogo, Tetsuo Akimoto, Takashi Saito, Hiroko Fukushima, Ryoko Suzuki, Mitsuru Takahashi, Takayuki Matsuo, Akira Matsumura, Hidekazu Masaki, Hajime Hosoi, Naoyuki Shigematsu, Hideyuki Sakurai", journal: "Cancer Treatment Reviews 98: 102209, 2021年7月", doi: null },
  { year: 2021, title: "Cost-effectiveness analysis for HbA1c test intervals to screen patients with type 2 diabetes based on risk stratification.", authors: "Sachiko Ohde, Kensuke Moriwaki, Osamu Takahashi", journal: "BMC Endocrine Disorders 21(1): 105, 2021年5月", doi: null },
  { year: 2021, title: "Economic Evaluation of First-Line Pertuzumab Therapy in Patients with HER2-Positive Metastatic Breast Cancer in Japan.", authors: "Kensuke Moriwaki, Saki Uechi, Takaaki Fujiwara, Yu Hagino, Kojiro Shimozuma", journal: "PharmacoEconomics - Open 5(3): 437-447, 2021年1月", doi: null },
  { year: 2021, title: "Cost-effectiveness of a hybrid emergency room system for severe trauma: a health technology assessment from the perspective of the third-party payer in Japan.", authors: "Takahiro Kinoshita, Kensuke Moriwaki, Nao Hanaki, Tetsuhisa Kitamura, Kazuma Yamakawa, Takashi Fukuda, Myriam G M Hunink, Satoshi Fujimi", journal: "World Journal of Emergency Surgery 16(1): 2, 2021年1月", doi: null },
  // ── 2020 ──
  { year: 2020, title: "Differences in healthcare expenditure estimates according to statistical approach: A nationwide claims database study on patients with hepatocellular carcinoma", authors: "Haruhisa Fukuda, Daisuke Sato, Kensuke Moriwaki, Haku Ishida", journal: "PLOS ONE 15(8): e0237316, 2020年8月", doi: null },
  { year: 2020, title: "The relationship between preference-based health-related quality of life and lifestyle behavior: a cross-sectional study on a community sample of adults who had undergone a health check-up.", authors: "Shinichi Noto, Osamu Takahashi, Takeshi Kimura, Kensuke Moriwaki, Katsunori Masuda", journal: "Health and Quality of Life Outcomes 18(1): 267, 2020年8月", doi: null },
  { year: 2020, title: "Factors influencing the prescribed dose of opioid analgesics in cancer patients", authors: "Momoyo Hashimoto, Kazuki Aogaki, Chikako Numata, Kensuke Moriwaki, Yoshinobu Matsuda, Ryouhei Ishii, Ikuko Tanaka, Yoshiaki Okamoto", journal: "Journal of Opioid Management 16(4): 247-252, 2020年7月", doi: null },
  // ── 2019 ──
  { year: 2019, title: "Cost-effectiveness of implementing guidelines for the treatment of glucocorticoid-induced osteoporosis in Japan", authors: "K. Moriwaki, H. Fukuda", journal: "Osteoporosis International 30(2): 299-310, 2019年1月", doi: null },
  // ── 2018 ──
  { year: 2018, title: "Present developments in reaching an international consensus for a model-based approach to particle beam therapy.", authors: "Anussara Prayongrat, Kikuo Umegaki, Arjen van der Schaaf, Albert C Koong, Steven H Lin, Thomas Whitaker, Todd McNutt, Naruhiro Matsufuji, Edward Graves, Masahiko Mizuta, Kazuhiko Ogawa, Hiroyuki Date, Kensuke Moriwaki, Yoichi M Ito, Keiji Kobashi, Yasuhiro Dekura, Shinichi Shimizu, Hiroki Shirato", journal: "Journal of Radiation Research 59(Suppl 1): i72-i76, 2018年3月", doi: null },
  // ── 2017 ──
  { year: 2017, title: "Cost-effectiveness analysis of once-yearly injection of zoledronic acid for the treatment of osteoporosis in Japan", authors: "K. Moriwaki, M. Mouri, H. Hagino", journal: "Osteoporosis International 28(6): 1939-1950, 2017年6月", doi: null },
  { year: 2017, title: "Development of an Official Guideline for the Economic Evaluation of Drugs/Medical Devices in Japan", authors: "Takeru Shiroiwa, Takashi Fukuda, Shunya Ikeda, Tomoyuki Takura, Kensuke Moriwaki", journal: "Value in Health 20(3): 372-378, 2017年3月", doi: null },
];

const BOOKS_DATA = [
  { year: 2025, text: "森脇健介. 骨粗鬆症の検診・予防・治療におけるコストと医療経済：骨粗鬆症の予防と治療ガイドライン作成委員会 編．「骨粗鬆症の予防と治療ガイドライン2025年版」ライフサイエンス出版. pp237-240 (2025)" },
  { year: 2022, text: 'Moriwaki K. "Cost-Effectiveness of Osteoporosis Treatment", In Osteoporotic Fracture and Systemic Skeletal Disorders (Eds., Takahashi HE, et al.), Springer Nature Singapore Pte Ltd., pp.473-480. 2022' },
];

const REVIEWS_DATA = [
  { year: 2025, text: "森脇 健介. 【放射線治療・IVR 基本のおさらいと最近の話題】費用対効果評価と放射線治療. 臨床放射線 70(5) 693-701 (2025)" },
  { year: 2025, text: "森脇 健介. 医療経済評価の基礎 第13回 医療技術評価における生成AI・大規模言語モデルの活用(2). 日本骨粗鬆症学会雑誌 11(3) 439-442 (2025)" },
  { year: 2025, text: "森脇 健介, 岩本 哲哉, 柏 宗伸, 森本 航輔, 前田 知美, 白岩 健, 下妻 晃二郎, 福田 敬. アルツハイマー病による軽度認知障害及び軽度の認知症に対するレカネマブの費用対効果評価. Academic Technology Assessment Group (ATAG) Reports 3(7) 3-64 (2025)" },
  { year: 2025, text: "森脇 健介. 医療経済評価の基礎 第12回 医療技術評価における生成AI・大規模言語モデルの活用(1). 日本骨粗鬆症学会雑誌 11(2) 199-202 (2025)" },
  { year: 2025, text: "森脇 健介. 医療経済評価の基礎 第11回 費用対効果評価における論点(2) 分析対象集団の設定. 日本骨粗鬆症学会雑誌 11(1) 47-50 (2025)" },
  { year: 2025, text: "柏 宗伸, 此村 恵子, 森脇 健介, 小嶋 智美, 前田 知美, 白岩 健, 下妻 晃二郎, 福田 敬. 2つ以上の標準的な治療が無効又は治療後に再発した,大細胞型B細胞リンパ腫又は濾胞性リンパ腫に対するエプコリタマブの費用対効果評価. Academic Technology Assessment Group (ATAG) Reports 3(3) (2025)" },
  { year: 2025, text: "森脇 健介. 臨床予測モデルを用いた意思決定分析モデル開発の方法と課題. 臨床評価 53(1) 94-108 (2025)" },
  { year: 2025, text: "柏 宗伸, 岩本 哲哉, 森本 航輔, 前田 知美, 山口 真央, 白岩 健, 森脇 健介, 福田 敬. 内分泌療法後に増悪したPIK3CA、AKT1又はPTEN遺伝子変異を有するホルモン受容体陽性かつHER2陰性の手術不能又は再発乳癌に対するカピバセルチブの費用対効果評価. Academic Technology Assessment Group (ATAG) Reports 3(11) (2025)" },
  { year: 2024, text: "Munenobu Kashiwa, Tetsuya Iwamoto, Michi Sakai, Shintaro Togashi, Kensuke Moriwaki, Kosuke Morimoto, Takeru Shiroiwa, Kojiro Shimozuma, Takashi Fukuda. Cost-effectiveness evaluation of tirzepatide for type 2 diabetes. Academic Technology Assessment Group (ATAG) Reports 2(5), 1-46 (2024)" },
  { year: 2024, text: "Kensuke Moriwaki, Yuta Suzuki, Munenobu Kashiwa, Tomomi Maeda, Satomi Kojima, Takeru Shiroiwa, Kojiro Shimozuma, Takashi Fukuda. Cost-effectiveness evaluation of ensitrelvir for infections caused by SARS-CoV-2. Academic Technology Assessment Group (ATAG) Reports 2(6), 1-70 (2024)" },
  { year: 2024, text: "Kensuke Moriwaki, Ryo Iketani, Kotomi Sakai, Shintaro Togashi, Munenobu Kashiwa, Kosuke Morimoto, Tomomi Maeda, Takeru Shiroiwa, Takashi Fukuda. Cost-effectiveness evaluation of tezepelumab for severe uncontrolled asthma. Academic Technology Assessment Group (ATAG) Reports 2(4), 1-70 (2024)" },
  { year: 2024, text: "森脇 健介. 医療経済評価の基礎 第10回　費用対効果評価における論点① 比較対照技術の選定. 日本骨粗鬆症学会雑誌 10(4), 511-514 (2024)" },
  { year: 2024, text: "森脇 健介. 医療経済評価の基礎 第9回　費用対効果評価制度の概要. 日本骨粗鬆症学会雑誌 10(3), 331-334 (2024)" },
  { year: 2024, text: "森脇 健介. 医療経済評価の基礎 第8回　不確実性の取り扱い②　確率論的感度分析. 日本骨粗鬆症学会雑誌 10(2), 155-158 (2024)" },
  { year: 2024, text: "森脇 健介. 医療経済と骨折リエゾンサービス. Jpn J Rehabil Med 61, 197-202 (2024)" },
  { year: 2024, text: "森脇 健介. 医療経済評価の基礎 第7回　不確実性の取り扱い①　決定論的感度分析. 日本骨粗鬆症学会雑誌 10(1), 29-31 (2024)" },
  { year: 2023, text: "森脇 健介. 医療経済評価の基礎 第6回　骨粗鬆症領域の費用効果分析モデル. 日本骨粗鬆症学会雑誌 9(4), 473-476 (2023)" },
  { year: 2023, text: "森脇 健介. 医療経済評価の基礎 第5回　マルコフモデルを用いた費用効果分析. 日本骨粗鬆症学会雑誌 9(3), 293-297 (2023)" },
  { year: 2023, text: "森脇 健介. 医療経済評価の基礎 第4回　決定樹モデルを用いた費用効果分析. 日本骨粗鬆症学会雑誌 9(2), 141-144 (2023)" },
];

const LECTURES_DATA = [
  { year: 2026, text: "森脇 健介. 医療の高額化と医療技術評価 －費用対効果評価－. 姫路獨協大学 薬学部 第14回卒後教育セミナー. 2026/03/08" },
  { year: 2025, text: "森脇 健介. 遺伝子治療の価値をどう測る？測ってどうする？東山高等高校 模擬講義. 2025/10/31" },
  { year: 2025, text: "Moriwaki K. Development of a doctoral-level HTA education program through collaboration among three universities. ISPOR Real-World Evidence Summit 2025: Enhancing Expert Education in HTA: Challenges and Lessons From Thailand. 2025/09/29" },
  { year: 2025, text: "森脇 健介. 骨粗鬆症治療の価値をどう測る?測ってどうする? 第27回 日本骨粗鬆症学会 特別講演2. 2025/09/13" },
  { year: 2025, text: "森脇健介. 費用対効果評価における AI の活用. ISPOR日本部会 特別講演会(東京). 2025/03/25" },
  { year: 2025, text: "森脇健介. 費用対効果評価と放射線治療. 2024年度東京都がん診療連携協議会研修部会放射線腫瘍医研修会／放射線治療談話会(WEB). 2025/03/08" },
  { year: 2024, text: "森脇健介. 臨床予測モデルを用いた意思決定分析モデル開発の方法と課題. ヘルスデータサイエンス学会・ISPOR日本部会 共催シンポジウム ～医療経済評価における意思決定分析モデル開発の方法と課題～(東京). 2024/12/04" },
  { year: 2024, text: "森脇健介. 骨折データベースの意義と診療報酬改定への関わり. 第3回 HIP FESTA(東京). 2024/11/23" },
  { year: 2024, text: "森脇健介. 国内の費用対効果評価における現状と課題. 2024年度臨床統計シンポジウム　医薬品開発における代替エンドポイントの利用と課題　—費用対効果評価における論点—(WEB). 2024/11/12" },
  { year: 2024, text: "森脇 健介. 費用対効果とQALY. QOL-PRO研究会, 第20回研究セミナー. 2024/03/20" },
  { year: 2024, text: "森脇 健介. 公的分析をしていて気になること. ISPOR日本部会 賛助会員企画「議論になるポイント～追加的有用性、意思決定のあり方など～」. 2024/01/22" },
  { year: 2023, text: "森脇 健介. 医療経済評価におけるリアルワールドデータの活用と課題. 第28回日本薬剤疫学会学術総会 シンポジウム5. 2023/11/18" },
  { year: 2023, text: "森脇 健介. 費用対効果評価の論点 —比較対照技術・外部対照選択の考え方—. 臨床統計シンポジウム. 2023/10/13" },
  { year: 2023, text: "森脇 健介. 医療技術の価値をどう測る？測ってどうする？. 第159回関西CancerTherapistの会. 2023/07/19" },
  { year: 2023, text: "森脇 健介. くすりの価値をどう測る？測ってどうする？. 立命館大学 1日キャンパス アカデミック講演会@香川. 2023/06/18" },
  { year: 2023, text: "森脇 健介. 放射線治療と医療経済. 日本医学放射線学会2023 教育講演 40（領域講習：治療）. 2023/04/16" },
  { year: 2023, text: "森脇 健介. コメント2  アカデミアの立場から. ISPOR日本部会2022年度シンポジウム　5年目の振り返り：費用対効果評価制度の現状と制度改正について考える. 2023年3月" },
  { year: 2023, text: "森脇 健介. 公的分析のレビュー・再分析業務に従事する立場から. HTAジョイントシンポジウム 費用対効果評価制度の成果と課題 シンポジウム日本のHTA制度上の課題と評価の論点. 2023年3月" },
  { year: 2023, text: "森脇 健介. 費用対効果分析の手法と解釈. 第36回高精度放射線学術大会 シンポジウム４ 高精度放射線治療の費用対効果. 2023年3月" },
  { year: 2022, text: "森脇 健介. 分析ガイドラインを考える 追加的有用性. ISPOR日本部会 第17回学術集会 シンポジウム. 2022年10月" },
  { year: 2022, text: "森脇 健介. 母集団調整による間接比較の方法と課題  -MAIC/STCを中心に-. ISPOR日本部会 賛助会員企画. 2022年10月" },
  { year: 2022, text: "森脇 健介. 添付文書を読むための医療統計学. 兵庫県立病院薬剤師研修 2022. 2022年11月" },
];

const PRESENTATIONS_DATA = [
  { year: 2025, text: "Taniguchi S, Akai M, Ozeki S, Sakai R, Moriwaki K, Iwatani T, Suzuki N. Health Economic Evaluation Model for Prostate Cancer Risk Management Through Preimplantation Genetic Testing for Monogenic Disorders (PGT-M). ISPOR Europe 2025. 2025/12/01" },
  { year: 2025, text: "Sakai R, Akai M, Ozeki S, Taniguchi S, Moriwaki K, Iwatani T, Suzuki N. Health Economic Evaluation Model for Pancreatic Cancer Risk Management Through Preimplantation Genetic Testing for Monogenic Disorders (PGT-M). ISPOR Europe 2025. 2025/12/01" },
  { year: 2025, text: "Akai M, Ozeki S, Sakai R, Taniguchi S, Moriwaki K, Iwatani T, Suzuki N. Health Economic Evaluation Model for Ovarian Cancer Risk Management Through Preimplantation Genetic Testing for Monogenic Disorders (PGT-M). ISPOR Europe 2025. 2025/12/01" },
  { year: 2025, text: "Ozeki S, Akai M, Sakai R, Taniguchi S, Moriwaki K, Iwatani T, Suzuki N. Health Economic Evaluation Model for Breast Cancer Risk Management Through Preimplantation Genetic Testing for Monogenic Disorders (PGT-M). ISPOR Europe 2025. 2025/12/01" },
  { year: 2025, text: "Inoue M, Moriwaki K, Morimoto K, Shimozuma K. Cost-Effectiveness Analysis of Gemcitabine Nab-Paclitaxel Combination, Modified FOLFIRINOX, and SIROX as First-Line Therapy for Pancreatic Cancer. ISPOR Europe 2025. 2025/12/01" },
  { year: 2025, text: "Noto S, Moriwaki K, Hagiwara Y, Iwatani T, Suzukamo Y, Morimoto K, Maeda T, Shimozuma K. Can EQ-5D-5L Discriminate the Clinical Severity of Asthma? ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "Yamaguchi M, Moriwaki K, Shimozuma K. Estimation of Utilities for Patients with Metastatic Breast Cancer Using Vignette in Japan. ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "Kano M, Moriwaki K, Morimoto K, Kashiwa M, Shimozuma K. Cost-Effectiveness Analysis of Mirvetuximab Soravtansine in FRα-Positive Platinum-Resistant Ovarian Cancer in Japan. ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "Kawai K, Moriwaki K, Morimoto K, Kashiwa M, Shimozuma K. Cost-Effectiveness Analysis of Dostarlimab Plus Chemotherapy as First-Line Treatment for Metastatic Non-Squamous Non-Small Cell Lung Cancer in Japan. ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "Izumi S, Moriwaki K, Shimozuma K, Kashiwa M, Morimoto K. Cost-Effectiveness Analysis of NALIRIFOX as First-Line Therapy for Metastatic Pancreatic Ductal Adenocarcinoma in Japan. ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "Kabuto M, Moriwaki K, Morimoto K, Kashiwa M, Shimozuma K. Cost-Effectiveness Analysis of Tripalimumab for Metastatic or Recurrent Triple-Negative Breast Cancer in Japan. ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "Ikeda S, Kobayashi M, Moriwaki K, Shiroiwa T, Fukuda T. Application of England's Severity Weighting to Cost-Effectiveness Evaluations in Japan. ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "Kashiwa M, Nishikawa T, Moriwaki K. A Model-Based Cost-Effectiveness Analysis of Anamorelin and Olanzapine in NSCLC Cachexia Treatment in Japan. ISPOR 2025 Annual Meeting. 2025/05/13" },
  { year: 2025, text: "天木 誠, 安斉 俊久, 森脇 健介. 重症の症状を伴う大動脈弁狭窄症患者における経カテーテル大動脈弁置換術のコスト効果分析. 第73回日本心臓病学会学術集会. 2025/09/20" },
  { year: 2025, text: "岩谷 胤生, 森脇 健介, 赤井 真奈, 尾関 咲紀, 酒井 隆太郎, 谷口 誠弥, 鈴木 直. 着床前診断(PGT-M)によるBRCA1/2病的バリアント制御の生存年数への影響. 第31回日本遺伝性腫瘍学会学術集会. 2025/06/20" },
  { year: 2025, text: "加藤 成隆, 山本 智章, 長谷 亨, 櫻井 敦志, 森脇 健介, 川野 伶緒, 澤口 毅. FFN-J大腿骨近位部骨折データベースから見た大腿骨近位部骨折の急性期治療の現状 FFN-Jデータベース委員会より. 第98回日本整形外科学会学術総会. 2025/05/22" },
  { year: 2024, text: "Ozeki S, Moriwaki K, Morimoto K, Shimozuma K. Cost-Effectiveness Analysis of Blinatumomab for Advanced Acute Lymphoblastic Leukemia in Japan. Value in Health 27(6): S111. ISPOR 2024 Abstract" },
  { year: 2024, text: "Akai M, Moriwaki K, Morimoto K, Shimozuma K. Cost-Effectiveness Analysis of Pembrolizumab + Chemotherapy for Persistent, Recurrent, or Metastatic Cervical Cancer in Japan. Value in Health 27(6): S69. ISPOR 2024 Abstract" },
  { year: 2024, text: "Taniguchi S, Moriwaki K, Morimoto K, Shimozuma K. Cost-Effectiveness Analysis of Pembrolizumab for Advanced Colorectal Cancer with MSI-High or dMMR in Japan. Value in Health 27(6): S150-S151. ISPOR 2024 Abstract" },
  { year: 2024, text: "Sakai R, Moriwaki K, Morimoto K, Shimozuma K. Cost-Effectiveness Analysis of Tremelimumab As First-Line Therapy for Metastatic Non-Small Cell Lung Cancer in Japan. Value in Health 27(6): S150. ISPOR 2024 Abstract" },
  { year: 2024, text: "Shimizu K, Moriwaki K, Morimoto K, Shimozuma K. Economic Evaluation of Duvelisib Versus Ofatumumab in Relapsed/Refractory CLL/SLL in Japan. Value in Health 27(6): S86-87. ISPOR 2024 Abstract" },
  { year: 2024, text: "Yamaguchi M, Moriwaki K, Shimozuma K. Vignette-Based Estimation of Utilities in Patients with Metastatic Breast Cancer in Japan. Value in Health 27(6): S252. ISPOR 2024 Abstract" },
  { year: 2023, text: "Shibata Y, Maeda T, Chen W, Morimoto K, Moriwaki K, Shimozuma K. Cost-Effectiveness Analysis of Cemiplimab as Second-Line Therapy for Recurrent Cervical Cancer in Japan. Value in Health 26(6): S150-S151. ISPOR 2023 Abstract" },
  { year: 2023, text: "Yoshioka S, Chen W, Maeda T, Morimoto K, Moriwaki K, Shimozuma K. Cost-Effectiveness Analysis of Erlotinib Plus Bevacizumab as First-Line Therapy for Advanced EGFR Mutation-Positive Non-Squamous Non-Small Cell Lung Cancer in Japan. Value in Health 26(6): S129. ISPOR 2023 Abstract" },
  { year: 2023, text: "Yamaguchi M, Maeda T, Morimoto K, Chen W, Moriwaki K, Shimozuma K. Cost-Effectiveness Analysis of Sacituzumab Govitecan as Second-Line Treatment for Metastatic Triple-Negative Breast Cancer in Japan. Value in Health 26(6): S106. ISPOR 2023 Abstract" },
  { year: 2023, text: "Fukuda T, Morimoto K, Maeda T, Chen W, Moriwaki K, Shimozuma K. Cost-Effectiveness of Nivolumab Plus Ipilimumab in Gastro-Oesophageal Cancer in Japan. Value in Health 26(6): S89. ISPOR 2023 Abstract" },
  { year: 2023, text: "Tsuyuki T, Morimoto K, Maeda T, Chen W, Moriwaki K, Shimozuma K. Economic Evaluation of Donafenib Versus Sorafenib in First-Line Treatment of Unresectable or Metastatic Hepatocellular Carcinoma in Japan. Value in Health 26(6): S67. ISPOR 2023 Abstract" },
  { year: 2023, text: "Fukui Y, Chen W, Maeda T, Morimoto K, Moriwaki K, Shimozuma K. Economic Evaluation of Nanoparticle Albumin-Bound paclitaxel for Previously Treated Advanced NSCLC in Japan. Value in Health 26(6): S150. ISPOR 2023 Abstract" },
  { year: 2022, text: "Moriwaki K, Katoh N, Hayashi H, et al. Preliminary Cost-Effectiveness Analysis of Proton Beam Therapy in Patients with Hepatocellular Carcinoma in Japan. ISPOR 2022. 2022年5月" },
  { year: 2022, text: "Morimoto K, Moriwaki K, Shimozuma K, et al. Cost-Effectiveness Analysis of Nivolumab Plus Chemotherapy Vs Chemotherapy in Patients with Advanced Gastric Cancer in Japan. ISPOR 2022. 2022年5月" },
];

const GRANTS_DATA = [
  { badge: "科研費", title: "多遺伝子パネル検査を用いた遺伝性腫瘍リスク制御の費用対効果", detail: "日本学術振興会 基盤研究(C) / 2026年4月〜2029年3月" },
  { badge: "科研費", title: "EQ-HWBのスコアリングアルゴリズムの開発と費用対効果評価への応用の検討", detail: "日本学術振興会 基盤研究(B) / 2024年4月〜2028年3月" },
  { badge: "科研費", title: "効率性フロンティアに基づく医療技術の価格調整法の開発と医療経済的便益の評価", detail: "日本学術振興会 基盤研究(C) / 2023年4月〜2026年3月" },
  { badge: "科研費", title: "二次性MRに対するカテーテル修復術のレスポンダー同定と費用対効果分析", detail: "日本学術振興会 基盤研究(C) / 2020年4月〜2025年3月" },
  { badge: "科研費", title: "費用対効果を含む多様な価値基準を統合した新たな医療政策意思決定支援システムの開発", detail: "日本学術振興会 基盤研究(C) / 2020年4月〜2024年3月" },
  { badge: "科研費", title: "脳卒中のLearning Healthcare Systemに関する研究", detail: "日本学術振興会 基盤研究(B) / 2018年〜2022年" },
  { badge: "科研費", title: "粒子線治療の費用対効果評価のための標準的な手法とデータに関する研究", detail: "日本学術振興会 基盤研究(B) / 2017年〜2022年" },
  { badge: "AMED", title: "心不全患者に対して客観的心不全予後予測情報がアドバンスケアプラニングに関する導入時期・患者QOLに及ぼす影響についての探索的試験", detail: "日本医療研究開発機構 / 2019年9月〜2021年3月" },
  { badge: "AMED", title: "経カテーテル大動脈弁置換術の有効性・最適化・費用対効果を明らかにする研究", detail: "日本医療研究開発機構 / 2017年〜2020年" },
  { badge: "AMED", title: "心血管イベント一次予防戦略に用いるMRIによる非侵襲的冠動脈ハイリスクプラーク診断法の臨床的有効性の検証", detail: "日本医療研究開発機構 / 2017年〜2020年" },
  { badge: "厚労科研", title: "医療経済評価の政策応用に向けた評価手法およびデータの確立と評価体制の整備に関する研究", detail: "厚生労働省 厚生労働科学研究費補助金 / 2018年〜2019年" },
  { badge: "厚労科研", title: "医療経済評価を用いた意思決定のための標準的な分析手法および総合的評価のあり方に関する研究", detail: "厚生労働省 厚生労働科学研究費補助金 / 2017年〜2018年" },
  { badge: "科研費", title: "医療経済評価に用いる健康関連QOL値集積のための実証的研究", detail: "日本学術振興会 基盤研究(B) / 2014年〜2018年" },
  { badge: "科研費", title: "骨粗鬆症の治療戦略に関する医療経済評価研究", detail: "日本学術振興会 若手(B) / 2014年〜2017年" },
  { badge: "科研費", title: "関節リウマチに対する生物学的製剤を用いた治療戦略の医療経済評価研究", detail: "日本学術振興会 若手(B) / 2011年〜2014年" },
];
