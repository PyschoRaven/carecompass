import { useState } from "react";
import "./index.css";

const content = {
  en: {
    appLabel: "Patient Engagement Prototype",
    appName: "CareCompass",
    switchLanguage: "العربية",
    heroEyebrow: "Understand your next healthcare steps",
    heroTitle: "Turn appointment instructions into a clear care plan.",
    heroText:
      "CareCompass helps patients organise healthcare instructions, follow-up tasks, and questions for their next visit.",
    informationalOnly: "Informational support only",
    privacyTitle: "Privacy first",
    privacyText:
      "Use fictional demo information for this prototype. Do not enter names, ID numbers, phone numbers, or unnecessary personal health information.",
    consent:
      "I understand that CareCompass is not a medical diagnosis or treatment service.",
    demoEyebrow: "Safe demo mode",
    demoTitle: "Choose a fictional case",
    demoLoad: "Load example instructions",
    inputEyebrow: "Appointment information",
    inputTitle: "Create your care plan",
    placeholder:
      "Paste fictional appointment instructions here, or choose a demo case above...",
    generate: "Generate care plan",
    clear: "Clear data",
    dashboardEyebrow: "Your care plan",
    dashboardTitle: "Clear next steps",
    summaryTitle: "Simple explanation",
    checklistTitle: "Action checklist",
    questionsTitle: "Questions for your provider",
    responsibleTitle: "Responsible AI notice",
    priority: "priority",
    visitPrepEyebrow: "Before your appointment",
    visitPrepTitle: "Prepare for your visit",
    visitPrepText:
      "Write down what you want to discuss so it is easier to explain during your appointment.",
    symptomsLabel: "Symptoms or changes you noticed",
    symptomsPlaceholder:
      "Example: I have noticed headaches in the evening for the past few days.",
    concernsLabel: "Concerns you want to discuss",
    concernsPlaceholder:
      "Example: I am concerned about how my medication is affecting my sleep.",
    questionsLabel: "Questions for your healthcare provider",
    questionsPlaceholder:
      "Example: Should I continue this medication? What should I monitor at home?",
    visitPrepNote:
      "This information stays in your current browser session and is not saved by CareCompass.",
    howItWorksEyebrow: "Built for clarity and trust",
    howItWorksTitle: "How CareCompass works",
    howItWorksSteps: [
      {
        number: "01",
        title: "Use safe information",
        text: "The prototype uses fictional examples and asks users not to enter unnecessary personal information.",
      },
      {
        number: "02",
        title: "Organise instructions",
        text: "CareCompass sends the appointment instructions to a secure backend that turns them into a structured checklist.",
      },
      {
        number: "03",
        title: "Prepare and follow up",
        text: "Patients can review next steps, save their own visit notes in the current session, and prepare questions for their provider.",
      },
    ],
    privacyEyebrow: "Privacy and responsible AI",
    privacyTitle: "Designed to support, not replace, healthcare professionals",
    privacyItems: [
      "CareCompass is an informational support tool and does not provide diagnoses or treatment decisions.",
      "The prototype is designed for fictional demo information and avoids collecting names, IDs, phone numbers, or unnecessary personal data.",
      "Visit-preparation notes stay in the current browser session and are not stored by the application.",
      "Patients are encouraged to contact their healthcare provider when they need medical advice or their symptoms change.",
    ],
    footerText: "CareCompass · Patient Engagement Prototype · AIMED Summit 2026",
    demoCases: [
      {
        id: 1,
        title: "Blood Pressure Follow-Up",
        notes:
          "Patient advised to monitor blood pressure once daily for the next two weeks. Continue current medication as prescribed. Complete fasting blood tests before next review. Follow-up appointment scheduled in two weeks.",
      },
      {
        id: 2,
        title: "Diabetes Test Follow-Up",
        notes:
          "Continue current diabetes medication as prescribed. Complete HbA1c blood test before the next clinic visit. Bring blood glucose records to the follow-up appointment in one month.",
      },
      {
        id: 3,
        title: "Recovery Follow-Up",
        notes:
          "Rest as advised and keep the area clean and dry. Continue medication as prescribed. Contact the clinic if symptoms become worse. Return for review in one week.",
      },
    ],
  },
  ar: {
    appLabel: "نموذج أولي لتفاعل المرضى",
    appName: "CareCompass",
    switchLanguage: "EN",
    heroEyebrow: "افهم خطواتك الصحية القادمة",
    heroTitle: "حوّل تعليمات الموعد إلى خطة رعاية واضحة.",
    heroText:
      "يساعد CareCompass المرضى على تنظيم تعليمات الرعاية الصحية وخطوات المتابعة والأسئلة التي يمكن طرحها في الموعد القادم.",
    informationalOnly: "معلومات للمساعدة فقط",
    privacyTitle: "الخصوصية أولاً",
    privacyText:
      "استخدم معلومات تجريبية خيالية في هذا النموذج. لا تدخل أسماء أو أرقام هوية أو أرقام هاتف أو معلومات صحية شخصية غير ضرورية.",
    consent:
      "أفهم أن CareCompass ليس خدمة للتشخيص الطبي أو تقديم العلاج.",
    demoEyebrow: "وضع تجريبي آمن",
    demoTitle: "اختر حالة تجريبية خيالية",
    demoLoad: "تحميل تعليمات تجريبية",
    inputEyebrow: "معلومات الموعد",
    inputTitle: "أنشئ خطة الرعاية الخاصة بك",
    placeholder:
      "ألصق تعليمات موعد تجريبية هنا، أو اختر حالة تجريبية من الأعلى...",
    generate: "إنشاء خطة الرعاية",
    clear: "مسح البيانات",
    dashboardEyebrow: "خطة الرعاية الخاصة بك",
    dashboardTitle: "خطواتك القادمة بوضوح",
    summaryTitle: "شرح مبسط",
    checklistTitle: "قائمة الإجراءات",
    questionsTitle: "أسئلة لمقدم الرعاية الصحية",
    responsibleTitle: "تنبيه حول الاستخدام المسؤول للذكاء الاصطناعي",
    priority: "الأولوية",
    visitPrepEyebrow: "قبل موعدك",
    visitPrepTitle: "استعد لموعدك",
    visitPrepText:
      "دوّن ما تريد مناقشته حتى يكون من الأسهل شرحه خلال موعدك مع مقدم الرعاية الصحية.",
    symptomsLabel: "الأعراض أو التغيرات التي لاحظتها",
    symptomsPlaceholder:
      "مثال: لاحظت صداعًا في المساء خلال الأيام القليلة الماضية.",
    concernsLabel: "المخاوف التي تريد مناقشتها",
    concernsPlaceholder:
      "مثال: أشعر بالقلق من تأثير الدواء على نومي.",
    questionsLabel: "أسئلة لمقدم الرعاية الصحية",
    questionsPlaceholder:
      "مثال: هل يجب أن أستمر في هذا الدواء؟ وما الذي يجب أن أراقبه في المنزل؟",
    visitPrepNote:
      "تبقى هذه المعلومات في جلسة المتصفح الحالية ولا يتم حفظها بواسطة CareCompass.",
    howItWorksEyebrow: "مصمم للوضوح والثقة",
    howItWorksTitle: "كيف يعمل CareCompass",
    howItWorksSteps: [
      {
        number: "٠١",
        title: "استخدم معلومات آمنة",
        text: "يستخدم النموذج أمثلة خيالية ويطلب من المستخدمين عدم إدخال معلومات شخصية غير ضرورية.",
      },
      {
        number: "٠٢",
        title: "نظّم التعليمات",
        text: "يرسل CareCompass تعليمات الموعد إلى خادم خلفي يحولها إلى قائمة خطوات واضحة ومنظمة.",
      },
      {
        number: "٠٣",
        title: "استعد وتابع",
        text: "يمكن للمريض مراجعة الخطوات القادمة وكتابة ملاحظاته للجلسة الحالية وتحضير أسئلة لمقدم الرعاية الصحية.",
      },
    ],
    privacyEyebrow: "الخصوصية والاستخدام المسؤول للذكاء الاصطناعي",
    privacyTitle: "مصمم للمساعدة وليس لاستبدال مقدمي الرعاية الصحية",
    privacyItems: [
      "CareCompass أداة معلوماتية مساندة ولا يقدم تشخيصًا طبيًا أو قرارات علاجية.",
      "صُمم النموذج لاستخدام معلومات تجريبية خيالية ويتجنب جمع الأسماء أو أرقام الهوية أو أرقام الهاتف أو البيانات الشخصية غير الضرورية.",
      "تبقى ملاحظات الاستعداد للموعد في جلسة المتصفح الحالية ولا يتم حفظها بواسطة التطبيق.",
      "يُنصح المرضى بالتواصل مع مقدم الرعاية الصحية عند الحاجة إلى نصيحة طبية أو عند تغير الأعراض.",
    ],
    footerText: "CareCompass · نموذج أولي لتفاعل المرضى · قمة AIMED 2026",
    demoCases: [
      {
        id: 1,
        title: "متابعة ضغط الدم",
        notes:
          "نموذج تجريبي: طُلب من المريض قياس ضغط الدم مرة واحدة يوميًا لمدة أسبوعين. الاستمرار في تناول الأدوية الحالية حسب التعليمات. إجراء فحوصات دم صائم قبل المراجعة القادمة. موعد المتابعة بعد أسبوعين.",
      },
      {
        id: 2,
        title: "متابعة فحوصات السكري",
        notes:
          "نموذج تجريبي: الاستمرار في تناول أدوية السكري الحالية حسب التعليمات. إجراء فحص HbA1c قبل الزيارة القادمة للعيادة. إحضار سجلات قياس سكر الدم إلى موعد المتابعة بعد شهر.",
      },
      {
        id: 3,
        title: "متابعة التعافي",
        notes:
          "نموذج تجريبي: الحصول على الراحة حسب التعليمات والحفاظ على المنطقة نظيفة وجافة. الاستمرار في تناول الأدوية حسب التعليمات. التواصل مع العيادة إذا أصبحت الأعراض أسوأ. العودة للمراجعة بعد أسبوع.",
      },
    ],
  },
};

const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:5000";

function App() {
  const [notes, setNotes] = useState("");
  const [carePlan, setCarePlan] = useState(null);
  const [language, setLanguage] = useState("en");
  const [consent, setConsent] = useState(false);
  const [selectedDemoId, setSelectedDemoId] = useState(null);
  const [visitPrep, setVisitPrep] = useState({
  symptoms: "",
  concerns: "",
  questions: "",
});

  const t = content[language];
  const isArabic = language === "ar";

  const generatePlan = async () => {
  if (!consent) {
    alert(
      isArabic
        ? "يرجى تأكيد أنك فهمت إشعار الخصوصية قبل المتابعة."
        : "Please confirm that you understand the privacy notice before continuing."
    );
    return;
  }

  if (!notes.trim()) {
    alert(
      isArabic
        ? "يرجى إدخال تعليمات الموعد أو اختيار حالة تجريبية."
        : "Please enter appointment instructions or choose a demo case."
    );
    return;
  }

  try {
    const response = await fetch(
      `${API_URL}/api/generate-care-plan`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notes }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Unable to generate the care plan.");
    }

    setCarePlan(data.carePlan);
  } catch (error) {
    alert(
      isArabic
        ? "تعذر إنشاء خطة الرعاية. تأكد من أن خادم الخلفية يعمل ثم حاول مرة أخرى."
        : "Unable to generate the care plan. Make sure the backend server is running and try again."
    );
  }
};

  const loadDemoCase = (demoCase) => {
    setNotes(demoCase.notes);
    setSelectedDemoId(demoCase.id);
    setCarePlan(null);
  };

  const clearPlan = () => {
    setNotes("");
    setSelectedDemoId(null);
    setCarePlan(null);
  };

  const updateVisitPrep = (field, value) => {
    setVisitPrep((currentPrep) => ({
      ...currentPrep,
      [field]: value,
    }));
  };

  const toggleLanguage = () => {
    const nextLanguage = language === "en" ? "ar" : "en";

    if (selectedDemoId) {
      const matchingDemoCase = content[nextLanguage].demoCases.find(
        (demoCase) => demoCase.id === selectedDemoId
      );

      if (matchingDemoCase) {
        setNotes(matchingDemoCase.notes);
      }
    }

    setLanguage(nextLanguage);
  };

  return (
    <main className="app-shell" dir={isArabic ? "rtl" : "ltr"}>
      <header className="topbar">
        <div>
          <p className="eyebrow">{t.appLabel}</p>
          <h1>{t.appName}</h1>
        </div>

        <button className="language-button" onClick={toggleLanguage}>
          {t.switchLanguage}
        </button>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h2>{t.heroTitle}</h2>
          <p>{t.heroText}</p>
        </div>

        <div className="hero-badge">
          <span>✓</span>
          {t.informationalOnly}
        </div>
      </section>

      <section className="privacy-card">
        <h3>{t.privacyTitle}</h3>
        <p>{t.privacyText}</p>

        <label className="consent-row">
          <input
            type="checkbox"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
          />
          <span>{t.consent}</span>
        </label>
      </section>

      <section className="demo-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.demoEyebrow}</p>
            <h2>{t.demoTitle}</h2>
          </div>
        </div>

        <div className="demo-grid">
          {t.demoCases.map((demoCase) => (
            <button
              key={demoCase.id}
              className="demo-card"
              onClick={() => loadDemoCase(demoCase)}
            >
              <strong>{demoCase.title}</strong>
              <span>{t.demoLoad}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="input-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{t.inputEyebrow}</p>
            <h2>{t.inputTitle}</h2>
          </div>
        </div>

        <textarea
          value={notes}
          onChange={(event) => setNotes(event.target.value)}
          placeholder={t.placeholder}
          rows="8"
        />

        <div className="action-row">
          <button className="primary-button" onClick={generatePlan}>
            {t.generate}
          </button>

          <button className="secondary-button" onClick={clearPlan}>
            {t.clear}
          </button>
        </div>
      </section>

      {carePlan && (
        <section className="dashboard">
          <div className="dashboard-heading">
            <div>
              <p className="eyebrow">{t.dashboardEyebrow}</p>
              <h2>{t.dashboardTitle}</h2>
            </div>
          </div>

          <article className="summary-card">
            <h3>{t.summaryTitle}</h3>
            <p>{isArabic ? carePlan.summaryAr : carePlan.summaryEn}</p>
          </article>

          <div className="dashboard-grid">
            <article className="panel">
              <h3>{t.checklistTitle}</h3>

              <div className="checklist">
                {carePlan.actions.map((item, index) => (
                  <label className="checklist-item" key={`${item.actionEn}-${index}`}>
                    <input type="checkbox" />
                    <span>
                      <strong>{isArabic ? item.actionAr : item.actionEn}</strong>
                      <small>
                        {isArabic
                          ? `${item.priorityAr} · ${item.timeframeAr}`
                          : `${item.priorityEn} ${t.priority} · ${item.timeframeEn}`}
                      </small>
                    </span>
                  </label>
                ))}
              </div>
            </article>

            <article className="panel">
              <h3>{t.questionsTitle}</h3>

              <ul className="question-list">
                {carePlan.questions.map((question, index) => (
                  <li key={`${question.questionEn}-${index}`}>
                    {isArabic ? question.questionAr : question.questionEn}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <article className="safety-card">
            <h3>{t.responsibleTitle}</h3>
            <p>
              {isArabic ? carePlan.safetyNoteAr : carePlan.safetyNoteEn}
            </p>
          </article>
        </section>
      )}
      <section className="visit-prep-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.visitPrepEyebrow}</p>
              <h2>{t.visitPrepTitle}</h2>
              <p className="section-description">{t.visitPrepText}</p>
            </div>
          </div>

          <div className="visit-prep-grid">
            <label className="prep-field">
              <span>{t.symptomsLabel}</span>
              <textarea
                value={visitPrep.symptoms}
                onChange={(event) => updateVisitPrep("symptoms", event.target.value)}
                placeholder={t.symptomsPlaceholder}
                rows="5"
              />
            </label>

            <label className="prep-field">
              <span>{t.concernsLabel}</span>
              <textarea
                value={visitPrep.concerns}
                onChange={(event) => updateVisitPrep("concerns", event.target.value)}
                placeholder={t.concernsPlaceholder}
                rows="5"
              />
            </label>

            <label className="prep-field prep-field-wide">
              <span>{t.questionsLabel}</span>
              <textarea
                value={visitPrep.questions}
                onChange={(event) => updateVisitPrep("questions", event.target.value)}
                placeholder={t.questionsPlaceholder}
                rows="5"
              />
            </label>
          </div>

          <p className="visit-prep-note">{t.visitPrepNote}</p>
        </section>

        <section className="how-it-works-section">
          <div className="section-heading" style="text-align:right">
            <div>
              <p className="eyebrow">{t.howItWorksEyebrow}</p>
              <h2>{t.howItWorksTitle}</h2>
            </div>
          </div>

          <div className="steps-grid">
            {t.howItWorksSteps.map((step) => (
              <article className="step-card" key={step.number}>
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="privacy-ai-section">
          <div>
            <p className="eyebrow">{t.privacyEyebrow}</p>
            <h2>{t.privacyTitle}</h2>
          </div>

          <ul className="privacy-ai-list">
            {t.privacyItems.map((item, index) => (
              <li key={index}>
                <span>✓</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </section>

        <footer className="app-footer">
          <p>{t.footerText}</p>
        </footer>
    </main>
  );
}

export default App;