package com.backend_pointers.loaders;
import com.backend_pointers.models.Role;
import com.backend_pointers.repositories.RoleRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class RoleDataLoader implements CommandLineRunner {

        private final RoleRepo roleRepository;

        public RoleDataLoader(RoleRepo roleRepository) {
            this.roleRepository = roleRepository;
        }

        @Override
        public void run(String... args){
            if (roleRepository.findAll().isEmpty()) {
                loadInitialRoles();
            }
        }
        private void loadInitialRoles() {

            Role user = createRole("DANCER");
            roleRepository.save(user);
            Role judge = createRole("JUDGE");
            roleRepository.save(judge);
            Role organizer = createRole("ORGANIZER");
            roleRepository.save(organizer);
            Role admin = createRole("ADMIN");
            roleRepository.save(admin);
        }

        private Role createRole (String name) {
            Role role = new Role();
            role.setAuthority(name);
            return role;
        }
    }

