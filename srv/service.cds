using { BusinessPartnerA2X } from './external/BusinessPartnerA2X.cds';

using { riskmanagement as my } from '../db/schema';

@path : '/service/riskmanagementSvcs'
service RiskManagementService
{
    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;

    @readonly
    entity A_BusinessPartner as
        projection on BusinessPartnerA2X.A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName
        };
}

annotate RiskManagementService with @requires :
[
    'authenticated-user'
];
