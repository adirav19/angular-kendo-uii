import { Component } from '@angular/core';

@Component({
    selector: 'splitter-component',
    template: `
        <kendo-splitter orientation="vertical" style="height:750px;">
            <kendo-splitter-pane>
                <kendo-splitter>
                <kendo-splitter-pane [collapsible]="true" size="30%">
                    <div class="pane-content">
                    <h3>Inner splitter / left pane</h3>
                    <p>Resizable and collapsible.</p>
                    </div>
                </kendo-splitter-pane>
                <kendo-splitter-pane>
                    <div class="pane-content">
                    <h3>Inner splitter / center pane</h3>
                    <p>Resizable only.</p>
                    </div>
                </kendo-splitter-pane>
                <kendo-splitter-pane [collapsible]="true" size="30%">
                    <div class="pane-content">
                    <h3>Inner splitter / right pane</h3>
                    <p>Resizable and collapsible.</p>
                    </div>
                </kendo-splitter-pane>
                </kendo-splitter>
            </kendo-splitter-pane>
            <kendo-splitter-pane size="200px">
                <div class="pane-content">
                <h3>Outer splitter / Middle pane</h3>
                <p>Resizable only.</p>
                </div>
            </kendo-splitter-pane>
            <kendo-splitter-pane [resizable]="false" size="200px">
                <div class="pane-content">
                <h3>Outer splitter / Bottom pane</h3>
                <p>Non-resizable and non-collapsible.</p>
                </div>
            </kendo-splitter-pane>
        </kendo-splitter>
    `,
    styles: [`
    .pane-content {
        padding: 0 10px;
    }
    h3 {
        font-size: 1.2em;
        margin: 10px 0;
        padding: 0;
    }
    p {
        margin: 0;
        padding: 0;
    }
    `]
})
export class SplitterComponent { }
