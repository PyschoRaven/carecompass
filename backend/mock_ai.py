def create_mock_care_plan(notes):
    lower_notes = notes.lower()

    actions = []
    questions = []

    def add_action(
        action_en,
        action_ar,
        timeframe_en,
        timeframe_ar,
        priority_en,
        priority_ar,
    ):
        actions.append(
            {
                "actionEn": action_en,
                "actionAr": action_ar,
                "timeframeEn": timeframe_en,
                "timeframeAr": timeframe_ar,
                "priorityEn": priority_en,
                "priorityAr": priority_ar,
            }
        )

    def add_question(question_en, question_ar):
        questions.append(
            {
                "questionEn": question_en,
                "questionAr": question_ar,
            }
        )

    has_blood_pressure = "blood pressure" in lower_notes or "ضغط الدم" in notes
    has_medication = "medication" in lower_notes or "الأدوية" in notes
    has_blood_test = (
        "blood test" in lower_notes
        or "hba1c" in lower_notes
        or "فحوصات دم" in notes
        or "فحص hba1c" in lower_notes
    )
    has_fasting = "fasting" in lower_notes or "صائم" in notes
    has_rest = "rest" in lower_notes or "الراحة" in notes
    has_clean_dry = "clean and dry" in lower_notes or "نظيفة وجافة" in notes
    has_worse = "worse" in lower_notes or "الأعراض أسوأ" in notes

    if has_blood_pressure:
        add_action(
            "Check your blood pressure once each day.",
            "قِس ضغط الدم مرة واحدة يوميًا.",
            "Daily",
            "يوميًا",
            "High",
            "مرتفعة",
        )
        add_question(
            "What blood pressure readings should I report to the clinic?",
            "ما قراءات ضغط الدم التي يجب أن أبلغ العيادة بها؟",
        )

    if has_medication:
        add_action(
            "Continue your medication exactly as instructed by your healthcare provider.",
            "استمر في تناول أدويتك تمامًا وفقًا لتعليمات مقدم الرعاية الصحية.",
            "Ongoing",
            "بشكل مستمر",
            "High",
            "مرتفعة",
        )
        add_question(
            "What should I do if I miss a medication dose?",
            "ماذا أفعل إذا نسيت تناول جرعة من الدواء؟",
        )

    if has_blood_test:
        add_action(
            "Complete the requested blood test before your next appointment.",
            "أكمل فحص الدم المطلوب قبل موعدك القادم.",
            "Before your follow-up",
            "قبل موعد المتابعة",
            "High",
            "مرتفعة",
        )
        add_question(
            "Do I need to prepare in a specific way before my blood test?",
            "هل أحتاج إلى التحضير بطريقة معينة قبل فحص الدم؟",
        )

    if has_fasting:
        add_action(
            "Follow the clinic's fasting instructions before your blood test.",
            "اتبع تعليمات الصيام التي قدمتها العيادة قبل فحص الدم.",
            "Before the test",
            "قبل الفحص",
            "Medium",
            "متوسطة",
        )
        add_question(
            "How many hours should I fast before the test?",
            "كم ساعة يجب أن أصوم قبل الفحص؟",
        )

    if has_rest:
        add_action(
            "Rest and follow the recovery instructions given by your healthcare provider.",
            "احصل على قسط كافٍ من الراحة واتبع تعليمات التعافي التي قدمها لك مقدم الرعاية الصحية.",
            "Ongoing",
            "بشكل مستمر",
            "Medium",
            "متوسطة",
        )

    if has_clean_dry:
        add_action(
            "Keep the affected area clean and dry as instructed.",
            "حافظ على المنطقة المصابة نظيفة وجافة وفقًا للتعليمات.",
            "Daily",
            "يوميًا",
            "Medium",
            "متوسطة",
        )

    if has_worse:
        add_action(
            "Contact the clinic if your symptoms become worse.",
            "تواصل مع العيادة إذا أصبحت الأعراض أسوأ أو ظهرت أعراض جديدة.",
            "When needed",
            "عند الحاجة",
            "High",
            "مرتفعة",
        )
        add_question(
            "Which changes in symptoms mean I should contact the clinic?",
            "ما التغيرات في الأعراض التي تستدعي التواصل مع العيادة؟",
        )

    follow_up_en = "Attend your next follow-up appointment as scheduled."
    follow_up_ar = "احضر موعد المتابعة القادم في الموعد المحدد."

    if "two weeks" in lower_notes or "أسبوعين" in notes:
        follow_up_en = "Attend your follow-up appointment in two weeks."
        follow_up_ar = "احضر موعد المتابعة بعد أسبوعين."
    elif "one week" in lower_notes or "أسبوع" in notes:
        follow_up_en = "Attend your follow-up appointment in one week."
        follow_up_ar = "احضر موعد المتابعة بعد أسبوع."
    elif "one month" in lower_notes or "شهر" in notes:
        follow_up_en = "Attend your follow-up appointment in one month."
        follow_up_ar = "احضر موعد المتابعة بعد شهر."

    add_action(
        follow_up_en,
        follow_up_ar,
        "Follow-up",
        "متابعة",
        "High",
        "مرتفعة",
    )

    add_question(
        "What should I bring to my next appointment?",
        "ما الذي يجب أن أحضره معي إلى موعدي القادم؟",
    )

    return {
        "summaryEn": (
            "Your healthcare provider has given you follow-up instructions. "
            "CareCompass has organised them into clear next steps below."
        ),
        "summaryAr": (
            "لديك خطوات متابعة مهمة بعد موعدك. رتّب لك CareCompass التعليمات "
            "بطريقة واضحة لتعرف ما الذي تحتاج إلى القيام به ومتى."
        ),
        "actions": actions,
        "questions": questions,
        "safetyNoteEn": (
            "CareCompass provides informational support only. It does not diagnose "
            "conditions, prescribe treatment, or replace healthcare professionals."
        ),
        "safetyNoteAr": (
            "يوفر CareCompass معلومات تساعدك على فهم تعليمات الرعاية الصحية فقط. "
            "لا يقدم تشخيصًا طبيًا أو وصفات علاجية ولا يحل محل مقدم الرعاية الصحية."
        ),
    }