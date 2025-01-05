# OpenPond Improvement Proposals (OIPs)

## Overview

OpenPond Improvement Proposals (OIPs) are the primary mechanism for proposing new features, collecting community input on an issue, and documenting design decisions for the OpenPond protocol. This document outlines the OIP process and standards.

## OIP Types

There are three main types of OIPs:

- **Standards Track OIP** describes any change that affects most or all OpenPond implementations, such as—a change to the network protocol, a change in agent communication rules, proposed application standards/conventions, or any change or addition that affects the interoperability of applications using OpenPond. Standards Track OIPs consist of three parts—a design document, an implementation, and (if warranted) an update to the formal specification. Standards Track OIPs can be broken down into the following categories:

  - **Core**: Improvements requiring consensus changes (e.g., changes to agent validation rules), as well as changes that are not necessarily consensus critical but may be relevant to core protocol discussions. This includes changes to the DHT protocol, message validation, network topology and economic mechanisms. e.g. [EIP-1559 -Fee market change](https://eips.ethereum.org/EIPS/eip-1559)
  - **Networking**: Includes improvements around the P2P networking layer, agent discovery protocol, and proposed improvements to network protocol specifications. This covers changes to connection handling, peer discovery mechanisms, and network message formats. e.g. [EIP-7594 - PeerDAS - Peer Data Availability Sampling](https://eips.ethereum.org/EIPS/eip-7594)
  - **Interface**: Includes improvements around API standards, method names, and protocol interfaces. This category covers both agent-to-agent communication interfaces and developer-facing APIs.
  - **ARC** (Agent Request for Comments): Application-level standards and conventions, including agent behavior standards, message format standards, capability declarations, and agent interaction protocols. e.g [ERC-20 - Token Standard](https://eips.ethereum.org/EIPS/eip-20).

- **Meta OIP** describes a process surrounding OpenPond or proposes a change to (or an event in) a process. Meta OIPs are like Standards Track OIPs but apply to areas other than the OpenPond protocol itself. They may propose an implementation, but not to OpenPond's codebase; they often require community consensus. Examples include procedures, guidelines, changes to the decision-making process, and changes to the tools or environment used in OpenPond development. e.g [EPI-7600 - Hardfork Meta - Pectra](https://eips.ethereum.org/EIPS/eip-7600)

It is highly recommended that a single OIP contain a single key proposal or new idea. The more focused the OIP, the more successful it tends to be. A change to one client doesn't require an OIP; a change that affects multiple agents, or defines a standard for multiple applications to use, does.

### Special Requirements for Core OIPs

Core OIPs affect fundamental protocol operations:

- Identity and authentication
- Network topology and discovery
- Message formats and validation
- Security mechanisms
- Registry and permissions
- Economic and incentive mechanisms

Required sections for Core OIPs:

1. **Protocol Changes**

   - Technical specification of changes
   - Data structures and formats
   - Backward compatibility
   - Economic model changes (if applicable)

2. **Security Considerations**

   - Security implications
   - Threat analysis
   - Mitigation strategies
   - Economic security analysis (if applicable)

3. **Implementation**
   - Reference implementation
   - Test requirements
   - Deployment plan
   - Migration strategy

## OIP Work Flow

### Shepherding an OIP

Parties involved in the process are you, the champion or _OIP author_, the _OIP editors_, and the _OpenPond Core Developers_.

Before you begin writing a formal OIP, you should vet your idea. Ask the OpenPond community first if an idea is original to avoid wasting time on something that will be rejected based on prior research. It is thus recommended to open a discussion thread on the OpenPond [forum](https://github.com/duckailabs/protocol/discussions) to do this.

## OIP Status

- **Draft**: Initial proposal under discussion
- **Review**: Formally submitted for peer review
- **Last Call**: Final review period for community feedback
- **Final**: Accepted and ready for implementation
- **Implemented**: Merged into protocol specification
- **Rejected**: Not accepted for implementation
- **Withdrawn**: Removed by author

## OIP Template

```markdown
# OIP-X: Title

## Status

Draft/Review/Last Call/Final/Implemented/Rejected/Withdrawn

## Type

Standards Track (Core|Networking|Interface|ARC)/Meta/

## Author(s)

- Name <email>

## Created

YYYY-MM-DD

## Summary

One paragraph explanation of the proposal.

## Motivation

Why should this change be made? What problems does it solve?

## Specification

Detailed technical specification of the change.

## Rationale

Why was this design chosen over alternatives?

## Backwards Compatibility

Any breaking changes? Migration path?

## Security Considerations

Security implications and mitigations.

## Reference Implementation

Link to implementation (if available).

## Copyright

Copyright and license information.
```

## OIP Workflow

1. **Discussion**

   - Open an issue to discuss the idea
   - Gather initial feedback
   - Draft the OIP document

2. **Submission**

   - Fork the repository
   - Create OIP in `protocol/proposals`
   - Submit pull request

3. **Review**

   - Technical review by maintainers
   - Community discussion period
   - Address feedback

4. **Decision**

   - Accept or reject based on consensus
   - Update OIP status accordingly

5. **Implementation**
   - Merge accepted OIPs
   - Update protocol specification
   - Release new version if needed

## OIP Numbering

- OIPs are numbered sequentially
- Format: OIP-X where X is the number
- Numbers are never reused
- Draft OIPs use temporary numbers

## Current OIPs

| Number | Title                      | Type | Status |
| ------ | -------------------------- | ---- | ------ |
| 1      | OIP Purpose and Guidelines | Meta | DRAFT  |

## Contributing

To propose a new OIP:

1. Review existing OIPs to avoid duplication
2. Discuss idea in GitHub issues
3. Use OIP template from this document
4. Follow submission workflow
5. Engage with community feedback

## License

All OIPs are licensed under the MIT License.
