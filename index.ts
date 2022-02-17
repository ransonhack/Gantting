import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { Gantt, Selection } from '@syncfusion/ej2-gantt';
import { projectNewData } from './data-source';

/**
 * Default Gantt sample
 */

Gantt.Inject(Selection);

    
    let gantt: Gantt = new Gantt(
        {
            dataSource: projectNewData,
            height: '450px',
            taskFields: {
                id: 'TaskID',
                name: 'TaskName',
                startDate: 'StartDate',
                endDate: 'EndDate',
                duration: 'Duration',
                progress: 'Progress',
                dependency: 'Predecessor',
                child: 'subtasks'
            },
            labelSettings: {
                leftLabel: 'TaskName'
            },
            projectStartDate: new Date('03/24/2019'),
            projectEndDate: new Date('07/06/2019')
        });
    gantt.appendTo('#DefaultFunctionalities');

