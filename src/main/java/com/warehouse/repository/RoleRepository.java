package com.warehouse.repository;


import com.warehouse.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    List<Role>  findByRoleNameContaining(String roleName);
}
