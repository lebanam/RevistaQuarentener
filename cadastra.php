<?"/" . substr($data,0,4);


echo "
Sistema de Cadastro de Notícias
";
echo "

";
echo "
";
echo "Nome:
 *
";
echo "Sobrenome:

 *
";
echo "Cidade:
 *
";
echo "Estado:(Exemplo: SP, RS, BA)
type='text' size=5> *
";
echo "Email: (Exemplo: feitosac@yahoo.com)
name='email' type='text' size=30>

";
echo "Título do Texto:
 
*
";
echo "Subtítulo do Texto:
<br />

";
echo "Texto:

 *
";
echo "input 
name='hora' type='hidden' value='$hora'>";
echo "Cadastrar";
echo "
";
echo "
";
echo "Campos marcados com * são obrigatórios no 
cadastro.
";
echo "Observação: Será inserido no seu cadastro a 
data atual, bem como a hora atual do cadastro
";
echo "Data: $novadata - Hora: $novahora
";

?>