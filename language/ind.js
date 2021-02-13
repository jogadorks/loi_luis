exports.wait = () => {
	return`*「 Aguarde 」 EM PROCESSO*`
}

exports.succes = () => {
	return`*「 SUCESSOS 」*`
}

exports.lvlon = () => {
	return`*「 ABILITADO 」*`
}

exports.lvloff = () => {
	return`*「 DESABILITADO 」*`
}

exports.lvlnul = () => {
	return`*SEU NÍVEL AINDA ESTÁ VAZIO*`
}

exports.lvlnoon = () => {
	return`*O NÍVEL DO GRUB NÃO FOI ATIVADO*`
}

exports.noregis = () => {
	return`*「 NÃO REGISTRADO 」*\n\n*Como registrar ${prefix}daftar nome|idade* \n*exemplo ${prefix}daftar Otaku|17*`
}

exports.rediregis = () => {
	return`*「 JÁ REGISTRADO 」*\n\n*você já está registrado no banco de dados do bot*`
}

exports.stikga = () => {
	return`*falhou tente novamente*`
}

exports.linkga = () => {
	return`*desculpe link inválido*`
}

exports.groupo = () => {
	return`*「SO EM GRUPOS」*`
}

exports.ownerb = () => {
	return`*「apenas o PROPRIETÁRIO pode usar esse comando」*`
}

exports.ownerg = () => {
	return`*「SOMENTE GRUPO DE PROPRIETÁRIOS」*`
}

exports.admin = () => {
	return`*「SOMENTE GRUPO DE ADMINISTRAÇÃO」*`
}

exports.badmin = () => {
	return`*「O BOT DEVE SER ADMINISTRADOR」*`
}

exports.nsfwoff = () => {
	return`*NSFW esta ATIVO*`
}

exports.bug = () => {
	return`*Problemas foram relatados ao proprietário do BOT, relatórios falsos não serão respondidos*`
}

exports.wrongf = () => {
	return`*Formato incorreto / texto em branco, pode esta faltando algo siga o exemplo*`
}

exports.clears = () => {
	return`*limpar todo o sucesso*`
}

exports.pc = () => {
	return`*「 CADASTRO 」*\n\npara saber se você se registrou, verifique a mensagem que eu enviei\n\nNOTA:\n*se você não recebeu uma mensagem. significa que você não salvou o número do bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 dados de cadastro 」*\n\nvocê se registrou com os dados \n\n┏━⊱nome\n┗⊱${namaUser}\n┏━⊱numero\n┗⊱wa.me/${sender.split("@")[0]}\n┏━⊱idade\n┗⊱${umurUser}\n┏━⊱hora de registro\n┗⊱${time}\n\n┏━❉ *ID* ❉━\n┣⊱${serialUser}\n┗⊱NOTA : não se esqueça deste número porque é importante:v`
}

exports.cmdnf = (prefix, command) => {
	return`comando *${prefix}${command}*não encontrado \ntente verificar se o comando esta correto*${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Desculpe, mas ${pushname} não o script do dono*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${aha}*\n\n_NOTA : converse bastante para obter XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahb}*\n\n_NOTA : converse bastante para obter XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel: ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahc}*\n\n_NOTA : converse bastante para obter XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahd}*\n\n_NOTA : converse bastante para obter XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahe}*\n\n_NOTA : converse bastante para obter XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Desculpe ${pushname} seu nível não é suficiente*\n\n*┏⊱seu nivel : ${getLevelingLevel(sender)}*\n*┣⊱tipo de comando : ${command}*\n*┗⊱requisitos de nível : ${ahf}*\n\n_NOTA : converse bastante para obter XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, premi) => { 
	return `
	┏━━━━❉ ❉━━━━━━┓
	┣⊱NOVINHO E ATUALIZADO
	┗━━━━❉ ❉━━━━━━┛
	┏━━❉ ❉━━━┓		
	┣⊱Otakubot
	┣⊱v2.0      
	┗━━❉ ❉━━━┛
┏━━━⊱  *SOBRE O USUÁRIO*  ⊰━━┓
┣⊱ *Nome* : ${pushname}
┣⊱ *Premium* : ${premi}
┣⊱ *Numero* : wa.me/${sender.split("@")[0]}
┣⊱ *O teu dinheiro* : R$${uangku}
┣⊱ *XP* : ${getLevelingXp(sender)}/${reqXp} 
┣⊱ *Level* : ${getLevelingLevel(sender)}
┣⊱ *rank* : ${role}
┣⊱ *Registro do usuário* : ${_registered.length}
┗━━━⊱  ⸨ *Otakubot* ⸩  ⊰━━━━┛

 *${prefix}owner*

┏━━⊱ *comandos basicos* ⊰━━┓
┣⊱ *${prefix}sticker* 
┣⊱ *${prefix}quotemaker* <text|author>
┣⊱ *${prefix}qrcode* <text>
┣⊱ *${prefix}ttp*
┣⊱ *${prefix}stickerhide* <text>
┣⊱ *${prefix}emoji*
┣━━⊱  *FUN MENU*  ⊰━━━┫
┣⊱ *${prefix}lirik* <text>
┣⊱ *${prefix}artinama>
┣⊱ *${prefix}chord* <text>
┣⊱ *${prefix}gtts
┣⊱ *${prefix}bisakah* <teks>
┣⊱ *${prefix}kapankah* <teks>
┣⊱ *${prefix}apakah* <teks>
┣⊱ *${prefix}rate* <teks>
┣⊱ *${prefix}slap*
┣⊱ *${prefix}tampar*
┣⊱ *${prefix}moddroid* <teks> *[VIP]*
┣⊱ *${prefix}happymod* <teks> *[VIP]*
┣━━⊱ *menu midia* ⊰━━┫
┣⊱ *${prefix}brainly* *[VIP]*
┣⊱ *${prefix}pinterest*
┣⊱ *${prefix}resepmasakan* <teks>
┣⊱ *${prefix}igstalk* <username>
┣⊱ *${prefix}bitly* <link>
┣⊱ *${prefix}ssweb* <link>
┣⊱ *${prefix}kbbi* <text>
┣━━⊱ *YT & SONG* ⊰━━━┫
┣⊱ *${prefix}ytmp3* <link> *[VIP]*
┣⊱ *${prefix}ytmp4* <link> *[VIP]*
┣⊱ *${prefix}joox* <judul> *[VIP]*
┣━━⊱  *NSFW MENU*  ⊰━┫
┣⊱ *${prefix}anjing*
┣⊱ *${prefix}blowjob*
┣⊱ *${prefix}nekonime*
┣⊱ *${prefix}pokemon*
┣⊱ *${prefix}husbu*
┣⊱ *${prefix}nangis*
┣⊱ *${prefix}cium*
┣⊱ *${prefix}peluk*
┣⊱ *${prefix}ranime*
┣━━⊱ *LIMITE E DINHEIRO* ⊰━┫
┣⊱ *${prefix}limit* 
┣⊱ *${prefix}buylimit* <total>
┣⊱ *${prefix}transfer* <tag|total>
┣⊱ *${prefix}dompet*
┣⊱ *${prefix}giftlimit* <tag|total>
┣⊱ *${prefix}leaderboard* <jtotal>
┣━━⊱ *MENU DO GRUPO* ⊰━┫
┣⊱ *${prefix}hidetag*
┣⊱ *${prefix}blocklist*
┣⊱ *${prefix}grouplist*
┣⊱ *${prefix}level*
┣⊱ *${prefix}linkgc*
┣⊱ *${prefix}tagall*
┣⊱ *${prefix}setpp*
┣⊱ *${prefix}add* <tag>
┣⊱ *${prefix}setname* <teks>
┣⊱ *${prefix}setdesc* <teks>
┣⊱ *${prefix}demote* <tag>
┣⊱ *${prefix}promote* <tag>
┣⊱ *${prefix}listadmin*
┣⊱ *${prefix}group* [buka/tutup]
┣⊱ *${prefix}leveling* [enable/disable]
┣⊱ *${prefix}nsfw* [1/0]
┣⊱ *${prefix}simih* [1/0]
┣⊱ *${prefix}welcome* [1/0]
┣━━⊱ *MENU DO PROPRIETÁRIO* ⊰━┫
┣⊱ *${prefix}bc* <teks>
┣⊱ *${prefix}bcgc* <teks>
┣⊱ *${prefix}kickall* <rawan ban>
┣⊱ *${prefix}setreply* <teks>
┣⊱ *${prefix}setprefix* <symbol>
┣⊱ *${prefix}clearall*
┣⊱ *${prefix}block* <tag>
┣⊱ *${prefix}unblock* <tag>
┣⊱ *${prefix}leave*
┣⊱ *${prefix}event* [1/0]
┣⊱ *${prefix}clone* <tag>
┣⊱ *${prefix}setppbot*
┣━━⊱*agradecimentos*⊰━━┫
┣⊱ks wa.me/5569984423608
┗━━⊱  ⸨ *Otakubot* ⸩  ⊰━━━━┛
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 Parabéns 」*
┏⊱ *Nome* : ${pushname}
┣⊱ *Número* : wa.me/${sender.split("@")[0]}
┣⊱ *Xp* : ${getLevelingXp(sender)}
┣⊱ *Limite* : +3
┣⊱ *Função*: ${role}
┗⊱ *Level* : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Desculpe ${pushname} O seu limite acabou*\n* mais nao fique triste voce pode comprar mais use ${prefix}buylimit /ou suba de nível*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMITE 」*
o resto do seu limite : ${limitCounts}

NOTA: para obter o limite. voce pode passar de nível ou comprar limite ${prefix}buylimit`
}

exports.satukos = () => {
	return`*Adicionar o numero 1 / ativar ou 0 / desativar`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`*┏⊱ 「 Conta bancaria 」⊰━┓*\n┣⊱ *Nome* : ${pushname}\n┣⊱ *Numero* : ${sender.split("@")[0]}\n┣⊱ *Dinheiro* : ${uangkau}\n┗━━━━━━━━━━`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM adicionado 」*

*Nome* : ${pnom}
*termina*:30 DIAS\n *obrigado pelo pedido premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM deletado 」*

*Nome* : ${hnom}
*termine*: AGORA:v\n*seu premiun foi retirado :D*`
}

exports.premon = (pushname) => {
	return`DESCULPE ${pushname} VOCÊ NÃO É UM USUÁRIO PREMIUM`
}
