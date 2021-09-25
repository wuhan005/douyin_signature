# douyin_signature

贝拉，我真的好喜欢你啊！为了你，我要逆抖音 VM！

本项目为抖音 Web `https://www.iesdouyin.com/web/api` 系列 API 接口，`_signature` 参数计算代码。

抖音 Web 端使用 JavaScript 实现了一个基于栈的虚拟机，虚拟机源码见 [vm.js](./vm.js)，来实现对 `_signature` 参数的计算。

经过对虚拟机 opcode 的分析，并打印出程序的运行流程进行分析。纯靠着眼拔把整个流程给理清了。其中流程有尝试创建 `canvas` 元素来确保是在浏览器中运行，`_signature` 参数基于用户输入的字符串、当前时间戳、浏览器 User-Agent 生成。

逆向整理后的源码在 [douyin_signatue.js](./douyin_signatue.js)，Web 手第一次做逆向，也不会编译原理，只能在 opcode 中打印 log 硬怼。😅