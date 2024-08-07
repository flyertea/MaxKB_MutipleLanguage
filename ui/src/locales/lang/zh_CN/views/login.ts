export default {
  systemSettings: "系统设置",
  userManagementSettings: "用户管理",
  teamMembers: "团队成员",
  modelSettings: "模型设置",
  emailSettings: "邮箱设置",
  welcomeMessage: "欢迎使用 StarCloudKB 智能知识库",
  normalLogin: "普通登录",
  loginButton: "登录",
  forgotPassword: "忘记密码?",
  requiredUsername: "请输入用户名",
  requiredPassword: "请输入密码",
  hitTest:{
    "hitTest": "命中测试",
    "hitTestInfo": "针对用户提问调试段落匹配情况，保障回答效果。",
    "hitParagraphsDisplay": "命中段落显示在这里",
    "noHitParagraphs": "没有命中的分段",
    "retrievalMode": "检索模式",
    "vectorRetrieval": "向量检索",
    "vectorRetrievalInfo": "通过向量距离计算与用户问题最相似的文本分段",
    "fullTextRetrieval": "全文检索",
    "fullTextRetrievalInfo": "通过关键词检索，返回包含关键词最多的文本分段",
    "hybridRetrieval": "混合检索",
    "hybridRetrievalInfo": "同时执行全文检索和向量检索，再进行重排序，从两类查询结果中选择匹配用户问题的最佳结果",
    "similarityAbove": "相似度高于",
    "returnSegmentsTop": "返回分段数 TOP",
    "cancel": "取消",
    "confirm": "确认",
    "parameterSettings": "参数设置",
    "pleaseEnter": "请输入"
  },
  knowledgeBase: {
    reference: "知识库引用",
    userQuestion: "用户问题",
    optimizedQuestion: "优化后问题",
    referenceParagraph: "引用分段"
  },
  user: {
    changePasswordTitle: "修改用户密码",
    newPassword: "新密码",
    enterNewPassword: "请输入新密码",
    confirmPassword: "确认密码",
    enterConfirmPassword: "请输入确认密码",
    passwordLength: "长度在 6 到 20 个字符",
    passwordNotMatch: "密码不一致",
    changePasswordSuccess: "修改用户密码成功"
  },
  team: {
    addMemberTitle: "添加成员",
    addMemberSubTitle: "成员登录后可以访问到您授权的数据。",
    usernameOrEmail: "用户名/邮箱",
    enterUsernameOrEmail: "请输入成员的用户名或邮箱",
    userNotFound: "用户不存在",
    add: "添加",
    submitSuccess: "提交成功"
  },
  common: {
    cancel: "取消",
    save: "保存",
    delete: "删除"
  },
  userManagement: {
    header: "用户管理",
    createUser: "创建用户",
    search: "搜索",
    username: "用户名",
    enterUsername: "请输入用户名",
    nickname: "姓名",
    enterNickname: "请输入姓名",
    email: "邮箱",
    enterEmail: "请输入邮箱",
    phone: "手机号",
    enterPhone: "请输入手机号",
    status: "状态",
    creationTime: "创建时间",
    actions: "操作",
    edit: "编辑",
    changePassword: "修改用户密码",
    delete: "删除",
    enableSuccess: "启用成功",
    disableSuccess: "禁用成功",
    editUser: "编辑用户",
    deleteConfirm: "是否删除用户：{username} ?",
    deleteWarning: "删除用户，该用户创建的资源（应用、知识库、模型）都会删除，请谨慎操作。",
    deleteSuccess: "删除成功",
    password: "登录密码",
    enterPassword: "请输入密码",
    usernameLength: "长度在 6 到 20 个字符",
    passwordLength: "长度在 6 到 20 个字符",
    editSuccess: "编辑成功",
    createSuccess: "创建成功"
  },
  chatLog: {
    header: "对话日志",
    searchPlaceholder: "搜索",
    export: "导出",
    columns: {
      abstract: "摘要",
      dialogueCount: "对话提问数",
      userFeedback: "用户反馈",
      improvementMark: "改进标注",
      time: "时间",
      actions: "操作"
    },
    filters: {
      agree: "赞同",
      disagree: "反对",
      clear: "清除",
      confirm: "确认"
    },
    confirmDelete: "是否删除对话：{abstract} ?",
    deleteWarning: "删除后无法恢复，请谨慎操作。",
    deleteSuccess: "删除成功",
    dayOptions: {
      past7Days: "过去7天",
      past30Days: "过去30天",
      past90Days: "过去90天",
      pastHalfYear: "过去半年"
    }
  },
}