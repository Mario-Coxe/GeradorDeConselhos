const conselhos = [
    'Acredite em si mesmo e em seu potencial.',
    'Seja grato pelas pequenas coisas da vida.',
    'Aproveite cada momento como se fosse o último.',
    'Mantenha a mente aberta para novas possibilidades.',
    'Não tenha medo de cometer erros; é assim que se aprende.',
    'Cuide bem do seu corpo e da sua mente.',
    'Ame sem reservas e sem expectativas.',
    'Acredite no poder da persistência.',
    'Pense positivo e atraia coisas boas para sua vida.',
    'Aprenda com o passado, mas não se prenda a ele.',
    'Acredite que você é capaz de alcançar seus sonhos.',
    'Valorize as amizades verdadeiras em sua vida.',
    'Seja gentil com os outros e consigo mesmo.',
    'Desafie-se a sair da sua zona de conforto.',
    'Aprenda a perdoar e deixar ir o que não serve mais.',
    'Mantenha um equilíbrio saudável entre trabalho e lazer.',
    'Confie em sua intuição e siga seu coração.',
    'Encontre alegria nas pequenas coisas do dia a dia.',
    'Não se compare aos outros; você é único.',
    'Busque sempre aprender algo novo.',
    'Acredite que cada obstáculo é uma oportunidade de crescimento.',
    'Pratique a empatia e o cuidado com o próximo.',
    'Valorize a sua saúde mental tanto quanto a física.',
    'Seja paciente com o processo; o sucesso leva tempo.',
    'Aproveite a jornada, não apenas o destino final.',
    'Cultive relacionamentos genuínos e significativos.',
    'Lembre-se de que você é responsável por sua própria felicidade.',
    'Faça algo todos os dias que te traga alegria.',
    'Celebre suas conquistas, por menores que sejam.',
    'Encontre tempo para a autoreflexão e o autocuidado.',
    'Aceite que nem tudo está sob seu controle e está tudo bem.',
    'Não deixe o medo te impedir de seguir seus sonhos.',
    'Seja gentil com aqueles que estão enfrentando desafios.',
    'Acredite que você merece amor e felicidade.',
    'Permita-se descansar e recarregar suas energias.',
    'Mantenha o foco no presente; o passado já foi e o futuro virá.',
    'Valorize o poder da gratidão em sua vida.',
    'Aprenda com seus erros, mas não se prenda a eles.',
    'Ame a si mesmo, com todas as suas imperfeições.',
    'Não tenha medo de pedir ajuda quando precisar.',
    'Crie metas realistas e trabalhe para alcançá-las.',
    'Cultive uma mentalidade positiva e otimista.',
    'Pratique a resiliência diante das adversidades.',
    'Encontre tempo para relaxar e rejuvenescer.',
    'Lembre-se de que cada dia é uma nova oportunidade.',
    'Mantenha-se aberto a diferentes perspectivas.',
    'Acredite que você é capaz de superar qualquer desafio.',
    'Seja fiel a você mesmo e aos seus valores.',
    'Cultive a paciência e a compreensão com os outros.',
    'Aproveite o poder transformador da natureza.',
    'Não se preocupe com o julgamento dos outros; seja autêntico.',
    'Estimule sua criatividade e explore sua imaginação.',
    'Encontre um propósito maior em sua vida.',
    'Pratique a autocompaixão e a bondade consigo mesmo.',
    'Não deixe que o estresse domine sua vida; encontre maneiras de relaxar.',
    'Acredite que você tem o poder de fazer a diferença no mundo.',
    'Mantenha-se fiel aos seus princípios, mesmo quando for difícil.',
    'Celebre cada etapa do seu progresso, não apenas o resultado final.',
    'Seja aberto a novas oportunidades e experiências.',
    'Crie uma rotina que promova equilíbrio e bem-estar.',
    'Lembre-se de que você é mais forte do que pensa.',
    'Acredite no seu potencial ilimitado.',
    'Não tenha medo de perseguir seus sonhos com paixão.',
    'Valorize a importância de um sono de qualidade.',
    'Pratique a humildade e esteja disposto a aprender com os outros.',
    'Aproveite o poder curativo da música e da arte.',
    'Cultive a gratidão mesmo nas situações mais desafiadoras.',
    'Lembre-se de que o fracasso faz parte do caminho para o sucesso.',
    'Encontre tempo para conectar-se com as pessoas que ama.',
    'Seja paciente com seu progresso; cada passo importa.',
    'Acredite que tudo acontece no momento certo.',
    'Mantenha o otimismo mesmo diante das dificuldades.',
    'Pratique a generosidade e faça o bem sem esperar nada em troca.',
    'Valorize a importância da simplicidade em sua vida.',
    'Não tenha medo de experimentar coisas novas.',
    'Acredite que você é digno de amor e respeito.',
    'Celebre suas qualidades e conquistas únicas.',
    'Encontre tempo para desacelerar e saborear a vida.',
    'Lembre-se de que você é responsável por criar sua própria felicidade.',
    'Seja gentil com todos que cruzarem seu caminho.',
    'Acredite que cada desafio é uma oportunidade de crescimento.',
    'Mantenha uma atitude de gratidão diante das adversidades.',
    'Valorize o poder da autodisciplina em sua jornada.',
    'Não se preocupe com o que os outros pensam; siga sua verdade.',
    'Cultive a coragem de enfrentar seus medos e limitações.',
    'Aproveite o poder transformador da natureza em sua vida.',
    'Pratique a honestidade consigo mesmo e com os outros.',
    'Encontre tempo para se reconectar com suas paixões.',
    'Lembre-se de que você é capaz de criar a vida que deseja.',
    'Acredite no poder da gentileza e da compaixão.',
    'Mantenha-se fiel aos seus valores, mesmo quando for difícil.',
    'Celebre cada pequena vitória ao longo do caminho.',
    'Seja aberto a novas perspectivas e aprendizados.',
    'Valorize a importância do autocuidado em sua vida.',
    'Não deixe que o passado defina seu futuro; você tem o poder de mudar.',
    'Cultive relacionamentos saudáveis e nutritivos.',
    'Aproveite o momento presente e encontre alegria nas pequenas coisas.',
    'Pratique a resiliência diante das adversidades.',
    'Encontre tempo para se desconectar e recarregar suas energias.',
    'Lembre-se de que você é único e especial, com seus próprios talentos.',
    'Acredite que cada desafio é uma oportunidade de crescimento pessoal.',
    'Mantenha-se aberto a novas possibilidades e oportunidades.',
    'Não deixe que o medo te impeça de buscar seus sonhos.',
    'Cultive uma atitude de gratidão e apreciação pela vida.',
    'Valorize o poder da persistência e da determinação.',
    'Pratique o perdão e deixe ir o que não serve mais em sua vida.',
    'Encontre tempo para cuidar de si mesmo e do seu bem-estar.',
    'Lembre-se de que você é capaz de superar qualquer desafio que surgir.',
    'Acredite que você merece amor, felicidade e sucesso.',
    'Mantenha uma mentalidade de crescimento e aprendizado contínuos.',
    'Celebre suas realizações, por menores que sejam.',
    'Seja gentil e compassivo consigo mesmo e com os outros.',
    'Aproveite a jornada e encontre beleza nos momentos simples.',
    'Pratique a autenticidade e seja verdadeiro consigo mesmo.',
    'Encontre tempo para se reconectar com a natureza e encontrar paz.',
    'Lembre-se de que você é responsável por criar sua própria felicidade.',
    'Valorize o poder da conexão humana e dos relacionamentos significativos.',
    'Não tenha medo de se desafiar e sair da sua zona de conforto.',
    'Cultive a gratidão diária e aprecie as bênçãos em sua vida.',
    'Acredite que você é capaz de alcançar seus objetivos e realizar seus sonhos.',
    'Mantenha uma mente aberta e esteja disposto a aprender com os outros.',
    'Celebre sua singularidade e abrace quem você é.',
    'Seja gentil e compassivo com todos, incluindo você mesmo.',
    'Aproveite o poder do pensamento positivo em sua vida diária.',
    'Pratique a paciência e a aceitação das coisas que não podem ser mudadas.',
    'Encontre tempo para se desconectar das distrações e se conectar consigo mesmo.',
    'Lembre-se de que o progresso é mais importante do que a perfeição.',
    'Acredite que cada desafio traz consigo uma lição valiosa.',
    'Mantenha um equilíbrio saudável entre trabalho, lazer e descanso.',
    'Valorize o poder da autodisciplina e do autodomínio.',
    'Não deixe que as opiniões dos outros definam sua autoestima.',
    'Cultive uma mentalidade de abundância e gratidão.',
    'Aproveite o presente e faça cada dia contar.',
    'Pratique a empatia e a compaixão em todas as interações.',
    'Encontre tempo para se conectar com suas paixões e interesses.',
    'Lembre-se de que você é capaz de criar a vida que deseja viver.',
    'Acredite que tudo acontece no momento certo e no ritmo certo.',
    'Mantenha a esperança e a confiança em si mesmo, mesmo em tempos difíceis.',
    'Celebre cada etapa do seu crescimento e progresso pessoal.',
    'Seja grato pelas lições aprendidas com os desafios que você enfrenta.',
    'Aproveite o poder da imaginação e da visualização para manifestar seus sonhos.',
    'Pratique o autocuidado diário e faça escolhas saudáveis ​​para o seu bem-estar.',
    'Encontre tempo para desacelerar, relaxar e recarregar suas energias.',
    'Lembre-se de que você é capaz de superar qualquer obstáculo que surgir.',
    'Acredite em si mesmo e nas suas habilidades para alcançar seus objetivos.',
    'Mantenha uma atitude positiva e otimista, mesmo diante dos desafios.',
    'Valorize a importância de se rodear de pessoas positivas e inspiradoras.',
    'Não tenha medo de arriscar e sair da sua zona de conforto.',
    'Cultive a gratidão e a apreciação pelas coisas simples da vida.',
    'Aproveite o poder da meditação e da prática da atenção plena.',
    'Pratique a autenticidade e seja verdadeiro consigo mesmo e com os outros.',
    'Encontre tempo para se conectar com a natureza e desfrutar de momentos de tranquilidade.',
    'Lembre-se de que cada dia é uma nova oportunidade para começar de novo.',
    'Valorize o poder do amor-próprio e da autocompaixão.',
    'Não se compare aos outros; cada jornada é única e especial.',
    'Cultive a resiliência e a capacidade de se adaptar às mudanças.',
    'Aproveite o poder da inspiração e da motivação para alcançar seus objetivos.',
    'Pratique a humildade e esteja disposto a aprender com os outros.',
    'Encontre tempo para se desconectar das distrações e se reconectar consigo mesmo.',
    'Lembre-se de que você é mais forte do que imagina e capaz de superar desafios.',
    'Acredite que você é digno de amor, felicidade e sucesso.',
    'Mantenha uma mentalidade de crescimento e abertura para novas possibilidades.',
    'Celebre suas realizações e conquistas, por menores que sejam.',
    'Seja gentil e compassivo consigo mesmo e com os outros.',
    'Aproveite o poder da gratidão e da apreciação em sua vida diária.',
    'Pratique a autenticidade e seja verdadeiro consigo mesmo.',
    'Encontre tempo para desacelerar e cuidar de si mesmo.',
    'Lembre-se de que você é único e especial, com suas próprias habilidades e talentos.',
    'Valorize o poder da persistência e da determinação em alcançar seus objetivos.',
    'Não deixe que o medo te impeça de buscar o que realmente deseja.',
    'Cultive a gratidão e a apreciação pelos pequenos momentos de alegria.',
    'Aproveite o poder da visualização e da criação de metas para alcançar seus sonhos.',
    'Pratique o perdão, tanto para os outros quanto para si mesmo.',
    'Encontre tempo para cuidar de seu bem-estar físico, mental e emocional.',
    'Lembre-se de que você é capaz de superar qualquer desafio que surgir em seu caminho.',
    'Acredite em sua própria capacidade de alcançar o sucesso e a felicidade.',
    'Mantenha uma mentalidade positiva e confie em seu próprio valor.',
    'Celebre seu progresso, não importa quão pequeno seja.',
    'Seja gentil consigo mesmo e com os outros, espalhando amor e bondade.',
    'Aproveite cada momento como uma oportunidade para crescer e aprender.',
    'Pratique a gratidão e reconheça as bênçãos em sua vida diária.',
    'Encontre tempo para se desconectar das distrações e se conectar com seu eu interior.',
    'Lembre-se de que você tem o poder de criar a vida que deseja viver.',
    'Valorize o poder do amor, tanto para si mesmo quanto para os outros.',
    'Não se preocupe com o julgamento dos outros; viva sua verdade autêntica.',
    'Cultive a coragem de enfrentar seus medos e perseguir seus sonhos.',
    'Aproveite o poder da natureza para se inspirar e encontrar paz interior.',
    'Pratique a empatia e coloque-se no lugar dos outros.',
    'Encontre tempo para fazer as coisas que te fazem feliz e te trazem alegria.',
    'Lembre-se de que você é único e valioso, exatamente como você é.',
    'Acredite em suas habilidades e no seu potencial ilimitado.',
    'Mantenha uma mentalidade aberta e esteja disposto a aprender e crescer.',
    'Celebre suas realizações e conquistas, grandes e pequenas.',
    'Seja gentil e compassivo consigo mesmo, especialmente nos momentos difíceis.',
    'Aproveite o poder da gratidão para cultivar uma mentalidade positiva.',
    'Pratique o autoperdão e deixe ir as emoções negativas do passado.',
    'Encontre tempo para cuidar do seu bem-estar físico, mental e emocional.',
    'Lembre-se de que você é capaz de superar qualquer desafio que surgir.',
    'Valorize o poder da perseverança e da determinação em alcançar seus objetivos.',
    'Não deixe que o medo te impeça de seguir seus sonhos.',
    'Cultive relacionamentos significativos e nutridores em sua vida.',
    'Aproveite o poder do amor-próprio e da autocompaixão.',
    'Pratique a paciência e a aceitação diante das adversidades.',
    'Encontre tempo para se reconectar com a natureza e encontrar paz interior.',
    'Lembre-se de que cada dia é uma nova oportunidade para começar de novo.',
    'Acredite em si mesmo e em seu potencial para alcançar o sucesso.',
    'Mantenha uma mentalidade de crescimento e aprendizado constante.',
    'Celebre suas imperfeições e abrace sua singularidade.',
    'Seja gentil e amável com todos que encontrar em seu caminho.',
    'Aproveite o poder da gratidão para trazer mais abundância à sua vida.',
    'Pratique a autenticidade e seja verdadeiro consigo mesmo.',
    'Encontre tempo para descansar e recarregar suas energias.',
    'Lembre-se de que você é digno de amor, felicidade e realização.',
    'Valorize o poder da positividade e do pensamento otimista.',
    'Não se compare aos outros, pois cada jornada é única.',
    'Cultive a resiliência e a capacidade de se adaptar às mudanças.',
    'Aproveite o poder da meditação e da atenção plena para encontrar paz interior.',
    'Pratique a empatia e a compaixão em todas as interações.',
    'Encontre tempo para se conectar com suas paixões e interesses.',
    'Lembre-se de que você é capaz de superar qualquer obstáculo.',
    'Acredite em si mesmo e no seu potencial ilimitado.',
    'Mantenha uma mentalidade aberta e esteja disposto a aprender com os outros.',
    'Celebre suas conquistas e progresso, não importa quão pequenos sejam.',
    'Seja gentil consigo mesmo e com os outros, espalhando bondade pelo mundo.',
    'Aproveite o poder da gratidão e aprecie as pequenas coisas da vida.',
    'Pratique a autenticidade e seja fiel a quem você realmente é.',
    'Encontre tempo para cuidar de sua saúde e bem-estar.',
    'Lembre-se de que você é único e especial, com talentos únicos para oferecer.',
    'Valorize o poder da persistência e da determinação em alcançar seus objetivos.',
    'Não deixe que o medo o impeça de buscar seus sonhos.',
    'Cultive a gratidão diária e aprecie as bênçãos em sua vida.',
    'Aproveite o poder da visualização para manifestar seus desejos.',
    'Pratique a autocompaixão e seja gentil consigo mesmo.',
    'Encontre tempo para relaxar e rejuvenescer sua mente e corpo.',
    'Lembre-se de que você é capaz de superar qualquer desafio que surgir.',
    'Valorize o poder da perseverança e da determinação.',
    'Não se compare aos outros; cada pessoa tem sua própria jornada.',
    'Cultive a resiliência e a capacidade de se adaptar às mudanças.',
    'Aproveite o poder do pensamento positivo e da mentalidade de crescimento.',
    'Pratique a empatia e a compaixão em todas as suas interações.',
    'Encontre tempo para fazer atividades que tragam alegria e satisfação.',
    'Lembre-se de que você é digno de amor, felicidade e sucesso.',
    'Valorize o poder da autenticidade e seja verdadeiro consigo mesmo.',
    'Não se preocupe com o julgamento dos outros; siga sua própria verdade.',
    'Cultive relacionamentos saudáveis e significativos.',
    'Aproveite o poder da gratidão e da apreciação em sua vida diária.',
    'Pratique a aceitação e a paciência diante das circunstâncias desafiadoras.',
    'Encontre tempo para se conectar com a natureza e encontrar paz interior.',
    'Lembre-se de que cada dia é uma nova oportunidade para crescer e evoluir.',
    'Valorize o poder da resiliência e da superação pessoal.',
    'Não deixe que o medo te impeça de perseguir seus sonhos e objetivos.',
    'Cultive a autoconfiança e acredite em suas habilidades e talentos.',
    'Aproveite o poder do autoconhecimento para tomar decisões alinhadas com seus valores.',
    'Pratique a generosidade e o compartilhamento com os outros.',
    'Encontre tempo para se desconectar das tecnologias e se conectar consigo mesmo.',
    'Lembre-se de que você é capaz de criar a vida que deseja viver.',
    'Valorize o poder do equilíbrio entre trabalho, lazer e descanso.',
    'Não se compare aos outros; siga o seu próprio ritmo e jornada.',
    'Cultive a gratidão e aprecie as pequenas coisas que trazem alegria.',
    'Aproveite o poder da imaginação e da visualização para manifestar seus sonhos.',
    'Pratique o perdão, tanto para os outros quanto para si mesmo.',
    'Encontre tempo para cuidar de sua saúde física, mental e emocional.',
    'Lembre-se de que você é capaz de superar qualquer desafio que surgir em seu caminho.',
    'Valorize o poder da determinação e da persistência em alcançar seus objetivos.',
    'Não deixe que o medo o impeça de buscar o que realmente deseja.',
    'Cultive relacionamentos significativos e nutritivos em sua vida.',
    'Aproveite o poder do amor-próprio e da autocompaixão.',
    'Pratique a paciência e a aceitação das coisas que não podem ser mudadas.',
    'Encontre tempo para se reconectar com a natureza e encontrar paz interior.',
    'Lembre-se de que cada dia é uma nova oportunidade para começar de novo.',
    'Valorize o poder da autenticidade e seja verdadeiro consigo mesmo.',
    'Não se compare aos outros; celebre sua própria jornada e progresso.',
    'Cultive a gratidão e a apreciação pelas pequenas coisas da vida.',
    'Aproveite o poder da meditação e da prática da atenção plena.',
    'Pratique a resiliência e encontre força nas adversidades.',
    'Encontre tempo para se desconectar das distrações e se reconectar consigo mesmo.',
    'Lembre-se de que você é capaz de superar qualquer obstáculo.',
    'Valorize o poder da persistência e da determinação em alcançar seus objetivos.',
    'Não deixe que o medo te impeça de seguir seus sonhos.',
    'Cultive relacionamentos significativos e nutridores em sua vida.',
    'Aproveite o poder do amor-próprio e da autocompaixão.',
    'Pratique a paciência e a aceitação diante das adversidades.',
    'Encontre tempo para se reconectar com a natureza e encontrar paz interior.',
    'Lembre-se de que cada dia é uma nova oportunidade para começar de novo.',
    'Valorize o poder da autenticidade e seja verdadeiro consigo mesmo.',
    'Não se compare aos outros; celebre sua própria jornada e progresso.',
    'Cultive a gratidão e a apreciação pelas pequenas coisas da vida.',
    'Aproveite o poder da meditação e da prática da atenção plena.',
    'Pratique a resiliência e encontre força nas adversidades.',
    'Encontre tempo para se desconectar das distrações e se reconectar consigo mesmo.',
    'Lembre-se de que você é capaz de superar qualquer obstáculo.',
    'Valorize o poder da persistência e da determinação em alcançar seus objetivos.',
    'Não deixe que o medo te impeça de seguir seus sonhos.',
    'Cultive relacionamentos significativos e nutridores em sua vida.',
    'Aproveite o poder do amor-próprio e da autocompaixão.',
    'Pratique a paciência e a aceitação diante das adversidades.',
    'Encontre tempo para se reconectar com a natureza e encontrar paz interior.',
    'Lembre-se de que cada dia é uma nova oportunidade para começar de novo.',
    'Valorize o poder da autenticidade e seja verdadeiro consigo mesmo.',
    'Não se compare aos outros; celebre sua própria jornada e progresso.',
    'Cultive a gratidão e a apreciação pelas pequenas coisas da vida.',
    'Aproveite o poder da meditação e da prática da atenção plena.',
    'Pratique a resiliência e encontre força nas adversidades.',
    'Encontre tempo para se desconectar das distrações e se reconectar consigo mesmo.',
    'Lembre-se de que você é capaz de superar qualquer obstáculo.',
    'Valorize o poder da persistência e da determinação em alcançar seus objetivos.',
    'Não deixe que o medo te impeça de seguir seus sonhos.',
    'Cultive relacionamentos significativos e nutridores em sua vida.',
    'Aproveite o poder do amor-próprio e da autocompaixão.',
    'Pratique a paciência e a aceitação diante das adversidades.',
    'Encontre tempo para se reconectar com a natureza e encontrar paz interior.',
    'Lembre-se de que cada dia é uma nova oportunidade para começar de novo.',
    'Valorize o poder da autenticidade e seja verdadeiro consigo mesmo.',
    'Não se compare aos outros; celebre sua própria jornada e progresso.',
    'Cultive a gratidão e a apreciação pelas pequenas coisas da vida.',
    'Aproveite o poder da meditação e da prática da atenção plena.',
    'Pratique a resiliência e encontre força nas adversidades.',
];