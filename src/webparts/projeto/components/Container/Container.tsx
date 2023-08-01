import * as React from 'react';
import { IContainerProps } from './iContainerProps';
import { FluentProvider, TabList, Tab, TabValue, SelectTabData, SelectTabEvent } from "@fluentui/react-components"
import { lightTheme } from '../../theme/Theme';
import ViewReceitas from '../View/Receita/Receitas';

const Container: React.FunctionComponent<IContainerProps> = (props) => {
    // Define em qual aba o usuario vai comecar
    const [selectedTab, setSelectedTab] = React.useState<TabValue>("tabVisualizacao")

    // Responsavel por mudar a Tab conforme o clique do usuário
    const onTabSelected = (event: SelectTabEvent, data:SelectTabData): void => {
        setSelectedTab(data.value)
    }

    return(
        <FluentProvider theme={lightTheme}>
            <TabList defaultSelectedValue={selectedTab} onTabSelect={onTabSelected}>
                <Tab value="tabVisualizacao">Visualização de Receita</Tab>
                <Tab value="tabCadastro">Cadastro de Receita</Tab>
            </TabList>
            <div>
                {/* Verifica se a tab selecionada é a de cadastro  */}
                { selectedTab === "tabCadastro" && <h1>Cadastro</h1>}
                { selectedTab ==="tabVisualizacao" && <h1><ViewReceitas>
                    
                    </ViewReceitas></h1>}
            </div>
        </FluentProvider>
    )
}

export default Container