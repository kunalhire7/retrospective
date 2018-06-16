import React from 'react';
import { mount } from 'enzyme';

import Notification from '../Notification/Notification';

describe('Notification modal', () => {

    describe('Common UI features without configurations', () => {
        let notification
        beforeEach(() => {
            notification = mount(
                <Notification
                    primaryAction={() => ({})}
                    secondaryAction={() => ({})}
                    primaryActionName=""
                    secondaryActionName=""
                >
                </Notification>);
        });

        it('should show warning icon', () => {
            const icon = notification.find('i.fa.fa-warning');
            expect(icon.length).toBe(1);
        });

        it('should contain warning text tag', () => {
            const notificationTextTag = notification.find('p.notification-text');
            expect(notificationTextTag.length).toBe(1);

        });

        it('should have primary button', () => {
            const primaryButton = notification.find('#primaryButton');
            expect(primaryButton.length).toBe(1);
        });

        it('should have secondary button', () => {
            const secondaryButton = notification.find('#secondaryButton');
            expect(secondaryButton.length).toBe(1);
        });
    });

    describe('Common UI features with configurations : DELETE', () => {
        let notificationWithOptions;
        let notificationText = 'Are you sure want to Delete Sales Department?';
        let primaryButtonText = 'Delete';
        let secondaryButtonText = 'Cancel';
        let mockedDeleteAction = jest.fn();
        let mockedCancelAction = jest.fn();

        beforeEach(() => {
            notificationWithOptions = mount(<Notification
                primaryAction={mockedDeleteAction}
                secondaryAction={mockedCancelAction}
                primaryActionName={primaryButtonText}
                secondaryActionName={secondaryButtonText}
            >{notificationText}
            </Notification>)
        });

        it('should have notification text', () => {
            const expectedNotificationText = notificationText;
            const notificationTextTag = notificationWithOptions.find('p.notification-text');
            const actualText = notificationTextTag.text();
            expect(actualText).toEqual(expectedNotificationText);
        });
        it('should have Delete as primary button caption', () => {
            const expectedPrimaryButtonText = primaryButtonText;
            const primaryButton = notificationWithOptions.find('#primaryButton');
            const actualPrimaryButtonText = primaryButton.text();
            expect(actualPrimaryButtonText).toEqual(expectedPrimaryButtonText);
        });
        it('should have Cancel as secondary button caption', () => {
            const expectedSecondaryButtonText = secondaryButtonText;
            const secondaryButton = notificationWithOptions.find('#secondaryButton');
            const actualSecondaryButtonText = secondaryButton.text();
            expect(actualSecondaryButtonText).toEqual(expectedSecondaryButtonText);
        });

        describe('Actions:', () => {
            it('DELETE : should dispatch delete action on primary button click', () => {
                notificationWithOptions.find('#primaryButton').simulate('click');
                expect(mockedDeleteAction).toBeCalled();
            });
            it('CANCEL : should dispatch cancel action on secondary button click', () => {
                notificationWithOptions.find('#secondaryButton').simulate('click');
                expect(mockedCancelAction).toBeCalled();
            });
        });
    })

});
