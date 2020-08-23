import {Injectable} from "@angular/core";

export class Cluster {
    constructor(
        public name: string,
        public servers: Server[]) {
    }
}

export class Server {
    constructor(
        public name: string,
        public ip: string) {
    }
}

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    fe_servers = [new Server("angularjs-cluster01", "10.0.0.1"),
        new Server("angularjs-cluster02", "10.0.0.2")];
    eureka_servers = [new Server("eureka-cluster01", "10.0.10.1"),
        new Server("eureka-cluster02", "10.0.10.2")];
    ms_students_servers = [new Server("ms-students-cl01", "10.0.20.1"),
        new Server("ms-students-cl02", "10.0.20.2")];
    ms_topics_servers = [new Server("ms-topics-cl01", "10.0.30.1"),
        new Server("ms-topics-cl02", "10.0.30.2")];
    ms_courses_servers = [new Server("ms-courses-cl01", "10.0.40.1"),
        new Server("ms-courses-cl02", "10.0.40.2")];

    db_servers = [new Server("oracle-01", "10.0.50.1")];

    mocked_env_servers = [new Server("nodered", "10.0.60.1")];

    eurekaAdmin_servers = [new Server("eureka-admin", "10.0.100.2")];
    springBoot_servers = [new Server("springboot-admin", "10.0.100.2")];

    clusters = [new Cluster("Front-End", this.fe_servers),
        new Cluster("Eureka", this.eureka_servers),
        new Cluster("Microservice", [...this.ms_students_servers, ...this.ms_topics_servers, ...this.ms_courses_servers]),
        new Cluster("DB", this.db_servers),
        new Cluster("Mocked Env", this.mocked_env_servers),
        new Cluster("Admin Tool", [...this.eurekaAdmin_servers, ...this.springBoot_servers])
    ];

    getClusters() {
        return this.clusters;
    }
}